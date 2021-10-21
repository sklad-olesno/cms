import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Zarządzanie treścią')
    .items([
      S.listItem()
        .title('Ustawienia')
        .schemaType(S.documentTypeListItems().filter(listItem => ['settings'].includes(listItem.getId()))[0].spec.schemaType)
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
            .title('Ustawienia')
        ),
        S.listItem()
        .title('MATI TRANS')
        .schemaType(S.documentTypeListItems().filter(listItem => ['mati_trans'].includes(listItem.getId()))[0].spec.schemaType)
        .child(
          S.document()
            .schemaType('mati_trans')
            .documentId('mati_trans')
            .title('MATI TRANS')
        ),
      S.listItem()
        .title('Strona główna')
        .schemaType(S.documentTypeListItems().filter(listItem => ['homepage'].includes(listItem.getId()))[0].spec.schemaType)
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
            .title('Strona główna')
        ),
      ...S.documentTypeListItems().filter(listItem => !['mati_trans','settings','homepage'].includes(listItem.getId()))
    ].sort(function(x, y){
      if (parseInt(x.getSchemaType().order) < parseInt(y.getSchemaType().order)) {
        return -1;
      }
      if (parseInt(x.getSchemaType().order) > parseInt(y.getSchemaType().order)) {
        return 1;
      }
      return 0;
    }))