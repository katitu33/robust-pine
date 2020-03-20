export default {
    "type": "document",
    "name": "config",
    "title": "Config",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseURL",
            "title": "Base URL",
            "description": "Hostname (and path) to the root",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "languageCode",
            "title": "Language Code",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "themesDir",
            "title": "Themes Directory",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "theme",
            "title": "Theme Name",
            "hidden": true,
            "validation": null
        },
        {
            "type": "object",
            "name": "params",
            "title": "Params",
            "description": "Site parameters",
            "validation": Rule => Rule.required(),
            "fields": [
                {
                    "type": "string",
                    "name": "google_analytics_id",
                    "title": "Google Analytics ID",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "google_tag_manager_id",
                    "title": "Google Tag Manager ID",
                    "validation": null
                },
                {
                    "type": "object",
                    "name": "logo",
                    "title": "Params Logo",
                    "validation": null,
                    "fields": [
                        {
                            "type": "image",
                            "name": "standard",
                            "title": "Logo Desktop",
                            "description": "the path of the desktop logo image",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "image",
                            "name": "mobile",
                            "title": "Logo Mobile",
                            "description": "the path of the mobile logo image",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "alt",
                            "title": "Logo Alt Text",
                            "validation": null
                        }
                    ]
                },
                {
                    "type": "object",
                    "name": "homepage_meta_tags",
                    "title": "Homepage Metatags",
                    "validation": null,
                    "fields": [
                        {
                            "type": "string",
                            "name": "meta_description",
                            "title": "meta_description",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "meta_og_title",
                            "title": "meta_og_title",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "meta_og_type",
                            "title": "meta_og_type",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "meta_og_url",
                            "title": "meta_og_url",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "meta_og_image",
                            "title": "meta_og_image",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "meta_og_description",
                            "title": "meta_og_description",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "meta_twitter_card",
                            "title": "meta_twitter_card",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "meta_twitter_site",
                            "title": "meta_twitter_site",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "meta_twitter_creator",
                            "title": "meta_twitter_creator",
                            "validation": null
                        }
                    ]
                }
            ]
        },
        {
            "type": "site_menus",
            "name": "menu",
            "title": "Menus",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "exampleSite/config.toml"
                ]
            }
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
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}