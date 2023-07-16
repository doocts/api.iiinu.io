import { BreedEntity } from '../modules/breed';
import { BREED_ENTITY_FIELD_MAP } from './constants';

export function mapToEdge(node: any, locale: string) {
  return {
    node: {
      id: node.id,
      nameEn: node.nameEn,
      nameJa: node.nameJa,
      name: locale === 'ja' ? node.nameJa ?? '' : node.nameEn ?? '',
      slug: node.slug,
      descriptionEn: node.descriptionEn,
      descriptionJa: node.descriptionJa,
      description:
        locale === 'ja' ? node.descriptionJa ?? '' : node.descriptionEn ?? '',
    },
    cursor: '',
  };
}

export function mapToBreedEntity(record: any, locale: string): BreedEntity {
  const entity = new BreedEntity();
  entity.locale = locale;

  for (const entityField in BREED_ENTITY_FIELD_MAP) {
    const recordField = BREED_ENTITY_FIELD_MAP[entityField];
    entity[entityField] = record[recordField];
  }

  return entity;
}

export function localizeEntity(entity: any, field: string, locale: string) {
  if (locale === 'ja') {
    return entity[`${field}Ja`] ?? '';
  } else {
    return entity[`${field}En`] ?? '';
  }
}
