export default {
    "type": "document",
    "name": "basicpage",
    "title": "Basic Page",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page.",
            "validation": null
        },
        {
            "type": "date",
            "name": "date",
            "title": "Date",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout",
            "title": "layout",
            "validation": null
        },
        {
            "type": "string",
            "name": "menu",
            "title": "Menu",
            "validation": null,
            "options": {
                "list": [
                    {
                        "title": "Main Menu",
                        "value": "main"
                    },
                    {
                        "title": "Footer Menu",
                        "value": "footer"
                    }
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Basic Page URL Path",
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