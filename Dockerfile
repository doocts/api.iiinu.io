###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

# Create app directory
WORKDIR /api

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND yarn.lock (when available).
# Copying this first prevents re-running yarn install on every code change.
COPY --chown=node:node package.json yarn.lock ./

# Install app dependencies using the `yarn install --frozen-lockfile` command instead of `npm install`
RUN yarn install --frozen-lockfile

# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /api

COPY --chown=node:node package.json yarn.lock ./

# In order to run `yarn build` we need access to the Nest CLI which is a dev dependency. In the previous development stage we ran `yarn install` which installed all dependencies, so we can copy over the node_modules directory from the development image
COPY --chown=node:node --from=development /api/node_modules ./node_modules

COPY --chown=node:node . .

RUN yarn prisma generate

# Run the build command which creates the production bundle
RUN yarn build

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Running `yarn install --production` removes the existing node_modules directory and passing in --production ensures that only the production dependencies are installed. This ensures that the node_modules directory is as optimized as possible
RUN yarn install --production && yarn cache clean

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /api/node_modules ./node_modules
COPY --chown=node:node --from=build /api/dist ./dist

# Start the server using the production build
CMD ["node", "dist/src/main.js"]
