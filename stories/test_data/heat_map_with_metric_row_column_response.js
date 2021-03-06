// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResponse: {
            dimensions: [
                {
                    headers: [
                        {
                            attributeHeader: {
                                name: "Product Name",
                                localIdentifier: "productAttribute",
                                uri: "/gdc/md/" + projectId + "/obj/952",
                                identifier: "label.product.id.name",
                                formOf: {
                                    name: "Product",
                                    uri: "/gdc/md/" + projectId + "/obj/949",
                                    identifier: "attr.product.id",
                                },
                            },
                        },
                    ],
                },
                {
                    headers: [
                        {
                            attributeHeader: {
                                name: "Stage Name",
                                localIdentifier: "stageNameAttribute",
                                uri: "/gdc/md/" + projectId + "/obj/1805",
                                identifier: "label.stage.name.stagename",
                                formOf: {
                                    name: "Stage Name",
                                    uri: "/gdc/md/" + projectId + "/obj/1095",
                                    identifier: "attr.stage.name",
                                },
                            },
                        },
                        {
                            measureGroupHeader: {
                                items: [
                                    {
                                        measureHeaderItem: {
                                            name: "Amount",
                                            format: "$#,##0.00",
                                            localIdentifier: "amountMeasure",
                                            uri: "/gdc/md/" + projectId + "/obj/1279",
                                            identifier: "ah1EuQxwaCqs",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
            links: {
                executionResult:
                    "/gdc/app/projects/px4o16t9ftwkloa82p4o78zv34lqk4vs/executionResults/1512601245832707840?q=eAGlksFuwjAMhl%2BlCjtWtLACLdI0cdgmLtO0jRPqITQp6kiaLnFgDPXd51AVEDsBlypx6t%2Bff3tH%0ANK%2BUhlcqORmTWQkFCM6ITzIlrCwNGc93hBWmEnT7rLScMvwtWLIskCyofiLVG0KSw2YlFI37VaRG%0A8e%2F6PhLfq2htArX4CnpxOEC9BTX8SXDJS5i9Ty8WCZNBwJt081iwB1SkALpYWOBXMKEcKhjsnIyx%0Av9x9rS4uxorDIalrVLJSUr3F%2FFOwT2cmxj6ALrm399gne4f%2FBRVQ4cyepynKSY6tZS9a2Yqk7bWZ%0ARY5DoEhN7jp%2BpxN2w9A1cig%2F8fDsqdyjQniMo6jvab6kmglujHswexil3QGs6WJ6izSRypaAgab%2B%0AFb72RwmpkVirTYN7GFLrxZtWzGauyBEaLzetWDLoo8RtG5ZEyfmCtbYckQ%2FdXG4N6iMjnM45rf8A%0AtoIo6A%3D%3D%0A&c=0c5930f3c6f2bcd256702254845e0d4a&offset=0%2C0&limit=1000%2C1000&dimensions=2&totals=0%2C0",
            },
        },
    };
};
