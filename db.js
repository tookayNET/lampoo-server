// temporary database to hold arrau od JSON data 

const db =
  [
    {
      "is_new_with_tag": true,
      "designer": "DSQUARED2",
      "name": "Jeans",
      "size": "Size M, IT 44",
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/7/5/75da5ec72de6048ad8a00f5e0fc025a59ae77166_XU80041747_1.jpg",
      "price": 180
    },
    {
      "is_new_with_tag": true,
      "designer": "RE/DONE",
      "name": "Jeans",
      "size": "Size S, Denim 26/27",
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/8/4/841aa8e312804d89104a0228c4fa7b0452f21960_XU80041371_1.jpg",
      "price": 110
    },
    {
      "is_new_with_tag": false,
      "designer": "ASPESI",
      "name": "T-shirt and Top",
      "sizes": [
        {
          "id": 1,
          "name": "IT 40",
          "qty": 1
        },
        {
          "id": 2,
          "name": "IT 44",
          "qty": 10
        }
      ],
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/0/9/09503c556b12c631532f46556743d200_1_final.jpg",
      "price": 261,
      "retail": 435
    },
    {
      "is_new_with_tag": true,
      "designer": "DSQUARED2",
      "name": "Jeans",
      "size": "Size M, IT 44",
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/7/5/75da5ec72de6048ad8a00f5e0fc025a59ae77166_XU80041747_1.jpg",
      "price": 180
    },
    {
      "is_new_with_tag": true,
      "designer": "RE/DONE",
      "name": "Jeans",
      "size": "Size S, Denim 26/27",
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/8/4/841aa8e312804d89104a0228c4fa7b0452f21960_XU80041371_1.jpg",
      "price": 110
    },
    {
      "is_new_with_tag": false,
      "designer": "ASPESI",
      "name": "T-shirt and Top",
      "sizes": [
        {
          "id": 1,
          "name": "IT 40",
          "qty": 1
        },
        {
          "id": 2,
          "name": "IT 44",
          "qty": 10
        }
      ],
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/0/9/09503c556b12c631532f46556743d200_1_final.jpg",
      "price": 261,
      "retail": 435
    },
    {
      "is_new_with_tag": true,
      "designer": "DSQUARED2",
      "name": "Jeans",
      "size": "Size M, IT 44",
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/7/5/75da5ec72de6048ad8a00f5e0fc025a59ae77166_XU80041747_1.jpg",
      "price": 180
    },
    {
      "is_new_with_tag": true,
      "designer": "RE/DONE",
      "name": "Jeans",
      "size": "Size S, Denim 26/27",
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/8/4/841aa8e312804d89104a0228c4fa7b0452f21960_XU80041371_1.jpg",
      "price": 110
    },
    {
      "is_new_with_tag": false,
      "designer": "ASPESI",
      "name": "T-shirt and Top",
      "sizes": [
        {
          "id": 1,
          "name": "IT 40",
          "qty": 1
        },
        {
          "id": 2,
          "name": "IT 44",
          "qty": 10
        }
      ],
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/0/9/09503c556b12c631532f46556743d200_1_final.jpg",
      "price": 261,
      "retail": 435
    },
    {
      "is_new_with_tag": true,
      "designer": "DSQUARED2",
      "name": "Jeans",
      "size": "Size M, IT 44",
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/7/5/75da5ec72de6048ad8a00f5e0fc025a59ae77166_XU80041747_1.jpg",
      "price": 180
    },
    {
      "is_new_with_tag": true,
      "designer": "RE/DONE",
      "name": "Jeans",
      "size": "Size S, Denim 26/27",
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/8/4/841aa8e312804d89104a0228c4fa7b0452f21960_XU80041371_1.jpg",
      "price": 110
    },
    {
      "is_new_with_tag": false,
      "designer": "ASPESI",
      "name": "T-shirt and Top",
      "sizes": [
        {
          "id": 1,
          "name": "IT 40",
          "qty": 1
        },
        {
          "id": 2,
          "name": "IT 44",
          "qty": 10
        }
      ],
      "image": "https://media.lampoo.com/catalog/product/cache/e60ace423598c1689891a07758f06611/0/9/09503c556b12c631532f46556743d200_1_final.jpg",
      "price": 261,
      "retail": 435
    }
  ];

module.exports = db;
