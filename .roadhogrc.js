export default {
    "entry" : "src/index.js",
    "env" : {
        "development": {
            "extraBabelPlugins": [
                "dva-hmr",
                "transform-runtime",
                [
                    "import", {
                        "libraryName": "antd",
                        "libraryDirectory": "lib",
                        "style": "css"
                    }
                ]
            ]
        },
        "production": {
            "extraBabelPlugins": ["transform-runtime"]
        }
    }
}
