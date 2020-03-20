export default {
    "type": "document",
    "name": "services",
    "title": "Services Overview",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "image",
            "name": "intro_image",
            "title": "Intro Image",
            "description": "Image displayed at in the pages intro section",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "intro_image_absolute",
            "title": "Intro Image Position",
            "description": "Should the image overflow or be contained",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "intro_image_hide_on_mobile",
            "title": "Intro Image Hide On Mobile",
            "description": "Hide the intro image on mobile screen sizes",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Services Overview URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "stackbit_dir",
            "title": "Pages directory",
            "description": "The directory where pages files are stored",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "exampleSite/content"
                ]
            }
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}