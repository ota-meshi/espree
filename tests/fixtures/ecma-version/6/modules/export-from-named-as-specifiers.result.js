export default {
    "type": "Program",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 40
        }
    },
    "range": [
        0,
        40
    ],
    "body": [
        {
            "type": "ExportNamedDeclaration",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 40
                }
            },
            "range": [
                0,
                40
            ],
            "declaration": null,
            "specifiers": [
                {
                    "type": "ExportSpecifier",
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 8
                        },
                        "end": {
                            "line": 1,
                            "column": 22
                        }
                    },
                    "range": [
                        8,
                        22
                    ],
                    "local": {
                        "type": "Identifier",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 1,
                                "column": 11
                            }
                        },
                        "range": [
                            8,
                            11
                        ],
                        "name": "foo"
                    },
                    "exported": {
                        "type": "Identifier",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 15
                            },
                            "end": {
                                "line": 1,
                                "column": 22
                            }
                        },
                        "range": [
                            15,
                            22
                        ],
                        "name": "default"
                    }
                },
                {
                    "type": "ExportSpecifier",
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 24
                        },
                        "end": {
                            "line": 1,
                            "column": 27
                        }
                    },
                    "range": [
                        24,
                        27
                    ],
                    "local": {
                        "type": "Identifier",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 24
                            },
                            "end": {
                                "line": 1,
                                "column": 27
                            }
                        },
                        "range": [
                            24,
                            27
                        ],
                        "name": "bar"
                    },
                    "exported": {
                        "type": "Identifier",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 24
                            },
                            "end": {
                                "line": 1,
                                "column": 27
                            }
                        },
                        "range": [
                            24,
                            27
                        ],
                        "name": "bar"
                    }
                }
            ],
            "source": {
                "type": "Literal",
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 34
                    },
                    "end": {
                        "line": 1,
                        "column": 39
                    }
                },
                "range": [
                    34,
                    39
                ],
                "value": "foo",
                "raw": "\"foo\""
            }
        }
    ],
    "sourceType": "module",
    "tokens": [
        {
            "type": "Keyword",
            "value": "export",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 6
                }
            },
            "range": [
                0,
                6
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 7
                },
                "end": {
                    "line": 1,
                    "column": 8
                }
            },
            "range": [
                7,
                8
            ]
        },
        {
            "type": "Identifier",
            "value": "foo",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 8
                },
                "end": {
                    "line": 1,
                    "column": 11
                }
            },
            "range": [
                8,
                11
            ]
        },
        {
            "type": "Identifier",
            "value": "as",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            },
            "range": [
                12,
                14
            ]
        },
        {
            "type": "Identifier",
            "value": "default",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 15
                },
                "end": {
                    "line": 1,
                    "column": 22
                }
            },
            "range": [
                15,
                22
            ]
        },
        {
            "type": "Punctuator",
            "value": ",",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 22
                },
                "end": {
                    "line": 1,
                    "column": 23
                }
            },
            "range": [
                22,
                23
            ]
        },
        {
            "type": "Identifier",
            "value": "bar",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 24
                },
                "end": {
                    "line": 1,
                    "column": 27
                }
            },
            "range": [
                24,
                27
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 27
                },
                "end": {
                    "line": 1,
                    "column": 28
                }
            },
            "range": [
                27,
                28
            ]
        },
        {
            "type": "Identifier",
            "value": "from",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 29
                },
                "end": {
                    "line": 1,
                    "column": 33
                }
            },
            "range": [
                29,
                33
            ]
        },
        {
            "type": "String",
            "value": "\"foo\"",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 34
                },
                "end": {
                    "line": 1,
                    "column": 39
                }
            },
            "range": [
                34,
                39
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 39
                },
                "end": {
                    "line": 1,
                    "column": 40
                }
            },
            "range": [
                39,
                40
            ]
        }
    ]
};