import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "ad5af941546e4aecb92f11b8b57e0633"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "9796bd8ccb2242f4a1277dfb164fe45c"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "745155744bdb487b902df885d173150b"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "cfb4a2708d254db58b87ff6462ba1c7b"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "aac7f00dd2cb4b70b76d58886b6c522e",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "9cf87b6d21f94c799096d2e44a8671a2",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "129fda3317cc4ed9a4d16cf298e8b64b",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
