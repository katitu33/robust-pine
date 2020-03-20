export default {
    "type": "document",
    "name": "team",
    "title": "Team",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "validation": null
        },
        {
            "type": "date",
            "name": "date",
            "title": "Date",
            "validation": null
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "validation": null
        },
        {
            "type": "string",
            "name": "jobtitle",
            "title": "Job Title",
            "validation": null
        },
        {
            "type": "string",
            "name": "linkedinurl",
            "title": "Linkedin URL",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "draft",
            "title": "Draft",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "featured",
            "title": "Featured",
            "validation": null
        },
        {
            "type": "number",
            "name": "weight",
            "title": "Weight",
            "validation": Rule => Rule.integer()
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Team URL Path",
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
    "preview": {
        "select": {
            "title": "title"
        }
    }
}