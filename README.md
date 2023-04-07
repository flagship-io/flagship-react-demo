# Flagship react-demo-app

## Setup

In the project directory, you can run:

```bash
 yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

<br/>

## [Demo](https://flagship-react-demo.netlify.app)

<br/>

## CodeSandbox [here](https://githubbox.com/flagship-io/flagship-react-demo)

## Flagship resource used for this demo 

Here's is a file containing all Flagship resources.

```
{
    "resources": [
        {
            "name": "project",
            "resourceVariable": "p1",
            "method": "create",
            "data": {
                "name": "Payment Method Project"
            }
        },
        {
            "name": "campaign",
            "resourceVariable": "c1",
            "method": "create",
            "data": {
                "project_id": "$p1.id",
                "name": "Payment method per device",
                "description": "from resource loader",
                "type": "toggle",
                "variation_groups": [
                    {
                        "name": "ANDROID ONLY",
                        "targeting": {
                            "targeting_groups": [
                                {
                                    "targetings": [
                                        {
                                            "operator": "EQUALS",
                                            "key": "osName",
                                            "value": "Android"
                                        }
                                    ]
                                }
                            ]
                        },
                        "variations": [
                            {
                                "name": "ANDROID ONLY",
                                "allocation": 100,
                                "modifications": {
                                    "type": "FLAG",
                                    "value": {
                                        "feature_payment_applePay_enable": false,
                                        "feature_payment_googlePay_enable": true
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "IOS ONLY",
                        "targeting": {
                            "targeting_groups": [
                                {
                                    "targetings": [
                                        {
                                            "operator": "EQUALS",
                                            "key": "osName",
                                            "value": "iOS"
                                        }
                                    ]
                                }
                            ]
                        },
                        "variations": [
                            {
                                "name": "IOS ONLY",
                                "allocation": 100,
                                "modifications": {
                                    "type": "FLAG",
                                    "value": {
                                        "feature_payment_applePay_enable": true,
                                        "feature_payment_googlePay_enable": false
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            "name": "campaign",
            "resourceVariable": "c2",
            "method": "create",
            "data": {
                "project_id": "$p1.id",
                "name": "Enable paypal",
                "description": "from resource loader",
                "type": "toggle",
                "variation_groups": [
                    {
                        "name": "Scenario for everyone else",
                        "targeting": {
                            "targeting_groups": [
                                {
                                    "targetings": [
                                        {
                                            "operator": "EQUALS",
                                            "key": "fs_all_users",
                                            "value": " "
                                        }
                                    ]
                                }
                            ]
                        },
                        "variations": [
                            {
                                "name": "Scenario for everyone else",
                                "allocation": 100,
                                "modifications": {
                                    "type": "FLAG",
                                    "value": {
                                        "feature_payment_paypal_enable": true
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            "name": "campaign",
            "resourceVariable": "c3",
            "method": "create",
            "data": {
                "project_id": "$p1.id",
                "name": "Remote Control/Demo",
                "description": "from resource loader",
                "type": "toggle",
                "variation_groups": [
                    {
                        "name": "Scenario for all",
                        "targeting": {
                            "targeting_groups": [
                                {
                                    "targetings": [
                                        {
                                            "operator": "EQUALS",
                                            "key": "fs_all_users",
                                            "value": " "
                                        }
                                    ]
                                }
                            ]
                        },
                        "variations": [
                            {
                                "name": "Scenario for all",
                                "allocation": 100,
                                "modifications": {
                                    "type": "FLAG",
                                    "value": {
                                        "payment_header_title_text": "Flagship demo",
                                        "payment_cta_prefix_text": "Pay",
                                        "payment_header_color": "#ee5c64",
                                        "payment_cta_enabled_color": "#1FA140",
                                        "payment_cta_disabled_color": "#F2F2F2"
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            "name": "flag",
            "resourceVariable": "f1",
            "data": {
                "name": "feature_payment_applePay_enable",
                "type": "boolean",
                "description": "created by CLI resource loader",
                "source": "cli"
            }
        },
        {
            "name": "flag",
            "resourceVariable": "f2",
            "data": {
                "name": "feature_payment_googlePay_enable",
                "type": "boolean",
                "description": "created by CLI resource loader",
                "source": "cli"
            }
        },
        {
            "name": "flag",
            "resourceVariable": "f3",
            "data": {
                "name": "feature_payment_paypal_enable",
                "type": "boolean",
                "description": "created by CLI resource loader",
                "source": "cli"
            }
        },
        {
            "name": "flag",
            "resourceVariable": "f4",
            "data": {
                "name": "payment_header_title_text",
                "type": "boolean",
                "description": "created by CLI resource loader",
                "source": "cli"
            }
        },
        {
            "name": "flag",
            "resourceVariable": "f5",
            "data": {
                "name": "payment_cta_prefix_text",
                "type": "boolean",
                "description": "created by CLI resource loader",
                "source": "cli"
            }
        },
        {
            "name": "flag",
            "resourceVariable": "f6",
            "data": {
                "name": "payment_header_color",
                "type": "boolean",
                "description": "created by CLI resource loader",
                "source": "cli"
            }
        },
        {
            "name": "flag",
            "resourceVariable": "f7",
            "data": {
                "name": "payment_cta_enabled_color",
                "type": "boolean",
                "description": "created by CLI resource loader",
                "source": "cli"
            }
        },
        {
            "name": "flag",
            "resourceVariable": "f8",
            "data": {
                "name": "payment_cta_disabled_color",
                "type": "boolean",
                "description": "created by CLI resource loader",
                "source": "cli"
            }
        },
        {
            "name": "targeting_key",
            "resourceVariable": "t1",
            "data": {
                "type": "string",
                "name": "osName",
                "description": "from resource loader"
            }
        },
        {
            "name": "goal",
            "resourceVariable": "g1",
            "data": {
                "type": "transaction",
                "label": "payment",
                "operator": "contains"
            }
        }
    ]
}
```

To load this resources to your environment, we recommand you to use our [Command Line Interface](https://docs.developers.flagship.io/docs/flagship-command-line-interface) using the [resource](https://docs.developers.flagship.io/docs/cli-resource) command. 
