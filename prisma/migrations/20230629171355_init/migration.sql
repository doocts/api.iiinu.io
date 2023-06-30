-- CreateTable
CREATE TABLE "AmericanKennelClub" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,

    CONSTRAINT "AmericanKennelClub_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AustralianNationalKennelCouncil" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,

    CONSTRAINT "AustralianNationalKennelCouncil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Body" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Body_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BreedColor" (
    "breedId" INTEGER NOT NULL,
    "colorId" INTEGER NOT NULL,

    CONSTRAINT "BreedColor_pkey" PRIMARY KEY ("breedId","colorId")
);

-- CreateTable
CREATE TABLE "BreedEye" (
    "breedId" INTEGER NOT NULL,
    "eyeId" INTEGER NOT NULL,

    CONSTRAINT "BreedEye_pkey" PRIMARY KEY ("breedId","eyeId")
);

-- CreateTable
CREATE TABLE "BreedPattern" (
    "breedId" INTEGER NOT NULL,
    "patternId" INTEGER NOT NULL,

    CONSTRAINT "BreedPattern_pkey" PRIMARY KEY ("breedId","patternId")
);

-- CreateTable
CREATE TABLE "Breed" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "kana" TEXT,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "historyJa" TEXT,
    "historyEn" TEXT,
    "featuresJa" TEXT,
    "featuresEn" TEXT,
    "traitsJa" TEXT,
    "traitsEn" TEXT,
    "healthJa" TEXT,
    "healthEn" TEXT,
    "notesJa" TEXT,
    "notesEn" TEXT,
    "originJa" TEXT,
    "originEn" TEXT,
    "minWeight" DOUBLE PRECISION,
    "maxWeight" DOUBLE PRECISION,
    "minHeight" DOUBLE PRECISION,
    "maxHeight" DOUBLE PRECISION,
    "sizeId" INTEGER,
    "countryId" INTEGER,
    "roleId" INTEGER,
    "earId" INTEGER,
    "tailId" INTEGER,
    "bodyId" INTEGER,
    "headId" INTEGER,
    "legId" INTEGER,
    "statusId" INTEGER,
    "coatId" INTEGER,
    "canadianKennelClubId" INTEGER,
    "americanKennelClubId" INTEGER,
    "australianNationalKennelCouncilId" INTEGER,
    "newZealandKennelClubId" INTEGER,
    "unitedKennelClubId" INTEGER,
    "theKennelClubId" INTEGER,
    "federationCynologiqueInternationaleId" INTEGER,
    "federationCynologiqueInternationaleProvisional" TEXT,
    "federationCynologiqueInternationaleNumber" TEXT,
    "isHumanReviewed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Breed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CanadianKennelClub" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,

    CONSTRAINT "CanadianKennelClub_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coat" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Coat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ear" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Ear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eye" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Eye_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FederationCynologiqueInternationale" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "parentId" INTEGER,

    CONSTRAINT "FederationCynologiqueInternationale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Head" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Head_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leg" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Leg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewZealandKennelClub" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,

    CONSTRAINT "NewZealandKennelClub_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pattern" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Pattern_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tail" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Tail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TheKennelClub" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,

    CONSTRAINT "TheKennelClub_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitedKennelClub" (
    "id" SERIAL NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionJa" TEXT,

    CONSTRAINT "UnitedKennelClub_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AmericanKennelClub_nameEn_key" ON "AmericanKennelClub"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "AmericanKennelClub_nameJa_key" ON "AmericanKennelClub"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "AustralianNationalKennelCouncil_nameEn_key" ON "AustralianNationalKennelCouncil"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "AustralianNationalKennelCouncil_nameJa_key" ON "AustralianNationalKennelCouncil"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Body_nameEn_key" ON "Body"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Body_nameJa_key" ON "Body"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Body_slug_key" ON "Body"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "BreedColor_breedId_colorId_key" ON "BreedColor"("breedId", "colorId");

-- CreateIndex
CREATE UNIQUE INDEX "BreedEye_breedId_eyeId_key" ON "BreedEye"("breedId", "eyeId");

-- CreateIndex
CREATE UNIQUE INDEX "BreedPattern_breedId_patternId_key" ON "BreedPattern"("breedId", "patternId");

-- CreateIndex
CREATE UNIQUE INDEX "Breed_nameEn_key" ON "Breed"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Breed_nameJa_key" ON "Breed"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "CanadianKennelClub_nameEn_key" ON "CanadianKennelClub"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "CanadianKennelClub_nameJa_key" ON "CanadianKennelClub"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Coat_nameEn_key" ON "Coat"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Coat_nameJa_key" ON "Coat"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Coat_slug_key" ON "Coat"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Color_nameEn_key" ON "Color"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Color_nameJa_key" ON "Color"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Color_slug_key" ON "Color"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Country_nameEn_key" ON "Country"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Country_nameJa_key" ON "Country"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Country_slug_key" ON "Country"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Ear_nameEn_key" ON "Ear"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Ear_nameJa_key" ON "Ear"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Ear_slug_key" ON "Ear"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Eye_nameEn_key" ON "Eye"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Eye_nameJa_key" ON "Eye"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Eye_slug_key" ON "Eye"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "FederationCynologiqueInternationale_nameEn_key" ON "FederationCynologiqueInternationale"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "FederationCynologiqueInternationale_nameJa_key" ON "FederationCynologiqueInternationale"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Head_nameEn_key" ON "Head"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Head_nameJa_key" ON "Head"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Head_slug_key" ON "Head"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Leg_nameEn_key" ON "Leg"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Leg_nameJa_key" ON "Leg"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Leg_slug_key" ON "Leg"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "NewZealandKennelClub_nameEn_key" ON "NewZealandKennelClub"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "NewZealandKennelClub_nameJa_key" ON "NewZealandKennelClub"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Pattern_nameEn_key" ON "Pattern"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Pattern_nameJa_key" ON "Pattern"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Pattern_slug_key" ON "Pattern"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Role_nameEn_key" ON "Role"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Role_nameJa_key" ON "Role"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Role_slug_key" ON "Role"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Size_nameEn_key" ON "Size"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Size_nameJa_key" ON "Size"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Size_slug_key" ON "Size"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Status_nameEn_key" ON "Status"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Status_nameJa_key" ON "Status"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Status_slug_key" ON "Status"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tail_nameEn_key" ON "Tail"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Tail_nameJa_key" ON "Tail"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "Tail_slug_key" ON "Tail"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "TheKennelClub_nameEn_key" ON "TheKennelClub"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "TheKennelClub_nameJa_key" ON "TheKennelClub"("nameJa");

-- CreateIndex
CREATE UNIQUE INDEX "UnitedKennelClub_nameEn_key" ON "UnitedKennelClub"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "UnitedKennelClub_nameJa_key" ON "UnitedKennelClub"("nameJa");

-- AddForeignKey
ALTER TABLE "BreedColor" ADD CONSTRAINT "BreedColor_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "Breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreedColor" ADD CONSTRAINT "BreedColor_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreedEye" ADD CONSTRAINT "BreedEye_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "Breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreedEye" ADD CONSTRAINT "BreedEye_eyeId_fkey" FOREIGN KEY ("eyeId") REFERENCES "Eye"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreedPattern" ADD CONSTRAINT "BreedPattern_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "Breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreedPattern" ADD CONSTRAINT "BreedPattern_patternId_fkey" FOREIGN KEY ("patternId") REFERENCES "Pattern"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_earId_fkey" FOREIGN KEY ("earId") REFERENCES "Ear"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_tailId_fkey" FOREIGN KEY ("tailId") REFERENCES "Tail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_bodyId_fkey" FOREIGN KEY ("bodyId") REFERENCES "Body"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_headId_fkey" FOREIGN KEY ("headId") REFERENCES "Head"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_legId_fkey" FOREIGN KEY ("legId") REFERENCES "Leg"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_coatId_fkey" FOREIGN KEY ("coatId") REFERENCES "Coat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_canadianKennelClubId_fkey" FOREIGN KEY ("canadianKennelClubId") REFERENCES "CanadianKennelClub"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_americanKennelClubId_fkey" FOREIGN KEY ("americanKennelClubId") REFERENCES "AmericanKennelClub"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_australianNationalKennelCouncilId_fkey" FOREIGN KEY ("australianNationalKennelCouncilId") REFERENCES "AustralianNationalKennelCouncil"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_newZealandKennelClubId_fkey" FOREIGN KEY ("newZealandKennelClubId") REFERENCES "NewZealandKennelClub"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_unitedKennelClubId_fkey" FOREIGN KEY ("unitedKennelClubId") REFERENCES "UnitedKennelClub"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_theKennelClubId_fkey" FOREIGN KEY ("theKennelClubId") REFERENCES "TheKennelClub"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breed" ADD CONSTRAINT "Breed_federationCynologiqueInternationaleId_fkey" FOREIGN KEY ("federationCynologiqueInternationaleId") REFERENCES "FederationCynologiqueInternationale"("id") ON DELETE SET NULL ON UPDATE CASCADE;
