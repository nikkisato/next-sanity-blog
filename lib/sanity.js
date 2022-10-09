import sanityClient from '@sanity/client'

// This connects with the sanity database
const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production'
}

export default sanityClient(options);