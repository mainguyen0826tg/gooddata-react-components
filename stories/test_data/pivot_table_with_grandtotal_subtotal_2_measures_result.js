// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResult: {
            data: [
                ["1119805233.82", "44067.4"],
                ["276807209.4", "12540"],
                [null, "56607.4"],
                ["2807210893.24", "71171.6"],
                ["1414090372.26", "48040.7"],
                [null, "119212.3"],
            ],
            paging: { count: [6, 2], offset: [0, 0], total: [6, 2] },
            headerItems: [
                [
                    [
                        {
                            attributeHeaderItem: {
                                name: "East Coast",
                                uri: "/gdc/md/" + projectId + "/obj/1023/elements?id=1225",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "East Coast",
                                uri: "/gdc/md/" + projectId + "/obj/1023/elements?id=1225",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "East Coast",
                                uri: "/gdc/md/" + projectId + "/obj/1023/elements?id=1225",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "West Coast",
                                uri: "/gdc/md/" + projectId + "/obj/1023/elements?id=1237",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "West Coast",
                                uri: "/gdc/md/" + projectId + "/obj/1023/elements?id=1237",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "West Coast",
                                uri: "/gdc/md/" + projectId + "/obj/1023/elements?id=1237",
                            },
                        },
                        { totalHeaderItem: { name: "sum", type: "sum" } },
                    ],
                    [
                        {
                            attributeHeaderItem: {
                                name: "Direct Sales",
                                uri: "/gdc/md/" + projectId + "/obj/1026/elements?id=1226",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "Inside Sales",
                                uri: "/gdc/md/" + projectId + "/obj/1026/elements?id=1234",
                            },
                        },
                        { totalHeaderItem: { name: "sum", type: "sum" } },
                        {
                            attributeHeaderItem: {
                                name: "Direct Sales",
                                uri: "/gdc/md/" + projectId + "/obj/1026/elements?id=1226",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "Inside Sales",
                                uri: "/gdc/md/" + projectId + "/obj/1026/elements?id=1234",
                            },
                        },
                        { totalHeaderItem: { name: "sum", type: "sum" } },
                        { totalHeaderItem: { name: "sum", type: "sum" } },
                    ],
                ],
                [
                    [
                        { measureHeaderItem: { name: "Sum of Amount", order: 0 } },
                        { measureHeaderItem: { name: "Sum of Probability", order: 1 } },
                    ],
                ],
            ],
            totals: [[["5617913708.72", null]], []],
        },
    };
};
