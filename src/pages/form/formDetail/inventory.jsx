

const statusList = ["LOW", "AVAILABLE", "NOT_AVAILABLE"]


export function getInventory (inventoryCode, inventoryList) {

    return [
        [{
            id: "itemCode",
            title: "Item Code",
            type: "text",
            placeholder: "Code",
            description: "auto generated",
            value: (inventoryCode !== "") ? inventoryCode : inventoryList.inventoryCode,
        },
            {
                id: "itemDesc",
                title: "Description",
                type: "text",
                placeholder: "Description",
                description: "Item Description",
                value: inventoryList.itemDesc
            }],
        [
            {
                id: "category",
                title: "Category",
                type: "text",
                placeholder: "Category",
                description: "Shoe type",
                value: inventoryList.category
            },
            {
                id: "size",
                title: "Size",
                type: "number",
                placeholder: "Size",
                description: "Shoe size",
                value: inventoryList.size
            }
        ],
        [
            {
                id: "supplierCode",
                title: "supplier Code",
                type: "text",
                placeholder: "supplier Code",
                description: "",
                value: inventoryList.supplierCode
            },
            {
                id: "supplierName",
                title: "supplier Name",
                type: "text",
                placeholder: "supplier Name",
                description: "",
                value: inventoryList.supplierName
            }
        ],
        [
            {
                id: "saleUnitPrice",
                title: "Sale Price",
                type: "number",
                placeholder: "Price",
                description: "Sale - Unit Price",
                value: inventoryList.saleUnitPrice
            },
            {
                id: "buyUnitPrice",
                title: "Buying Price",
                type: "number",
                placeholder: "Price",
                description: "Buy - Unit Price",
                value: inventoryList.buyUnitPrice
            }
        ],
        [
            {
                id: "expectedProfit",
                title: "Expected Profit",
                type: "number",
                placeholder: "Profit",
                description: "Expected profit of the item",
                value: inventoryList.expectedProfit
            },
            {
                id: "profitMargin",
                title: "Profit Margin",
                type: "number",
                placeholder: "Margin",
                description: "Percentage of the profit against the sale price",
                value: inventoryList.profitMargin
            }
        ],
        [ {

                id: "itemQty",
                title: "Item Quantity",
                type: "number",
                placeholder: "Qty",
                description: "Available Item Quantity",
                value: inventoryList.itemQty

        },
            {
                id: "status",
                title: "Item Status",
                type: "select",
                placeholder: "Status",
                description: "",
                selectList: statusList,
                value: inventoryList.status
            }

        ]
    ]

}

