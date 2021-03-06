// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        execution: {
            afm: {
                measures: [
                    {
                        localIdentifier: "ah1EuQxwaCqs",
                        definition: { measure: { item: { identifier: "ah1EuQxwaCqs" } } },
                    },
                ],
                attributes: [
                    {
                        displayForm: { identifier: "label.product.id.name" },
                        localIdentifier: "va_13",
                    },
                    {
                        displayForm: { identifier: "label.stage.name.stagename" },
                        localIdentifier: "va_17",
                    },
                ],
                filters: [
                    {
                        relativeDateFilter: {
                            dataSet: { identifier: "closed.dataset.dt" },
                            granularity: "GDC.time.year",
                            from: -8,
                            to: -8,
                        },
                    },
                ],
            },
            resultSpec: {
                dimensions: [{ itemIdentifiers: ["measureGroup"] }, { itemIdentifiers: ["va_13", "va_17"] }],
            },
        },
    };
};
