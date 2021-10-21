// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import homepage from './homepage'
import offer from './offer'
import prices from './prices'
import mati_trans from './mati_trans'
import page from './page'
import navigation from './navigation'
import settings from './settings'

import blockContent from './blockContent'
import navigationItemExternall from './nav-item-externall'
import navigationItemInternall from './nav-item-internall'
import section_title_left_description from './section_title_left_description'
import section_title_description_link_image from './section_title_description_link_image'
import section_title_description_link_center from './section_title_description_link_center'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    homepage,
    offer,
    mati_trans,
    prices,
    page,
    navigation,
    settings,
    blockContent,
    navigationItemExternall,
    navigationItemInternall,
    section_title_left_description,
    section_title_description_link_image,
    section_title_description_link_center
  ]),
})
