const dummyproducts = [
    {
        id: 1,
        title: "Razer Kraken V3 Over Ear Gaming Headset",
        img: "https://d.scdn.gr/images/sku_main_images/033257/33257082/20211230165333_razer_kraken_v3_over_ear_gaming_headset_usb.jpeg",
        price: 70.71,
        quantity: 10,
        product_type: "headset",
        product_color: "black",
        brand: "Razer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mauris finibus," +
        "congue justo id, pellentesque dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." +
        " Aliquam et justo vitae leo lobortis interdum eu in eros. Nulla convallis faucibus dui, ac finibus augue feugiat et.",
        seller_username: "admin"
    },
    {
        id: 2,
        title: "Dell MS3220",
        img: "https://www.exclusivestores.gr/dell/images/photos/209-81-DEMOS3220B.jpg",
        price: 20.70,
        quantity: 10,
        product_type: "mouse",
        product_color: "black",
        brand: "Dell",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mauris finibus," +
        "congue justo id, pellentesque dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." +
        " Aliquam et justo vitae leo lobortis interdum eu in eros. Nulla convallis faucibus dui, ac finibus augue feugiat et.",
        seller_username: "admin"
    },
    {
        id: 3,
        title: "Razer Deathadder V3 Pro Gaming Mouse",
        img: "https://external.webstorage.gr/mmimages/image/24/42/49/56/1721018-RAZER-DEATHADDER-V3-PRO-hero-560x560.jpg",
        price: 135.32,
        quantity: 10,
        product_type: "mouse",
        product_color: "black",
        brand: "Razer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mauris finibus," +
        "congue justo id, pellentesque dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." +
        " Aliquam et justo vitae leo lobortis interdum eu in eros. Nulla convallis faucibus dui, ac finibus augue feugiat et.",
        seller_username: "admin"
    },
    {
        id: 4,
        title: "Razer Deathadder V3 Pro Faker Edition Gaming Mouse",
        img: "https://c.scdn.gr/images/sku_main_images/043576/43576070/20230628134117_razer_deathadder_v3_faker_edition_asyrmato_gaming_pontiki_30000_dpi_kokkino.jpeg",
        price: 164.92,
        quantity: 10,
        product_type: "mouse",
        product_color: "red",
        brand: "Razer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mauris finibus," +
        "congue justo id, pellentesque dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." +
        " Aliquam et justo vitae leo lobortis interdum eu in eros. Nulla convallis faucibus dui, ac finibus augue feugiat et.",
        seller_username: "admin"
    },
    {
        id: 5,
        title: "HyperX Cloud II Over Ear Gaming Headset",
        img: "https://c.scdn.gr/images/sku_main_images/020312/20312949/20190930124525_hyperx_cloud_ii_red.jpeg",
        price: 78.83,
        quantity: 10,
        product_type: "headset",
        product_color: "black",
        brand: "HyperX",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mauris finibus," +
        "congue justo id, pellentesque dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." +
        " Aliquam et justo vitae leo lobortis interdum eu in eros. Nulla convallis faucibus dui, ac finibus augue feugiat et.",
        seller_username: "admin"
    },
    {
        id: 6,
        title: "Blue Microphones Yeti",
        img: "https://stechi.gr/image/cache/catalog/yeti-550x550h.jpg",
        price: 134.47,
        quantity: 10,
        product_type: "microphone",
        product_color: "black",
        brand: "Blue Microphones",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mauris finibus," +
        "congue justo id, pellentesque dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." +
        " Aliquam et justo vitae leo lobortis interdum eu in eros. Nulla convallis faucibus dui, ac finibus augue feugiat et.",
        seller_username: "admin"
    },
    {
        id: 7,
        title: "Razer Seiren V2 Pro",
        img: "https://a.scdn.gr/images/sku_main_images/033297/33297044/20220104121829_razer_seiren_v2_pro_mikrofono_ypologisti_me_syndesi_usb.jpeg",
        price: 123.26,
        quantity: 10,
        product_type: "microphone",
        product_color: "black",
        brand: "Razer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mauris finibus," +
        "congue justo id, pellentesque dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." +
        " Aliquam et justo vitae leo lobortis interdum eu in eros. Nulla convallis faucibus dui, ac finibus augue feugiat et.",
        seller_username: "admin"
    },
    {
        id: 8,
        title: "Logitech G733 Over Ear Gaming Headset",
        img: "https://d.scdn.gr/images/sku_main_images/024882/24882583/20200923110413_logitech_g733_blue.jpeg",
        price: 124.64,
        quantity: 10,
        product_type: "headset",
        product_color: "blue",
        brand: "Logitech",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mauris finibus," +
        "congue justo id, pellentesque dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." +
        " Aliquam et justo vitae leo lobortis interdum eu in eros. Nulla convallis faucibus dui, ac finibus augue feugiat et.",
        seller_username: "admin"
    },
    {
        id: 9,
        title: "Apple iPhone 15 5G",
        img: "https://b.scdn.gr/images/sku_main_images/045762/45762480/20230915151209_apple_iphone_15_5g.jpeg",
        price: 917.84,
        quantity: 10,
        product_type: "mobilephone",
        product_color: "black",
        brand: "Apple",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mauris finibus," +
        "congue justo id, pellentesque dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." +
        " Aliquam et justo vitae leo lobortis interdum eu in eros. Nulla convallis faucibus dui, ac finibus augue feugiat et.",
        seller_username: "admin"
    },
    {
        id: 10,
        title: "Apple iPhone 14 Pro Max 5G",
        img: "https://b.scdn.gr/images/sku_main_images/038109/38109147/20220912164436_apple_iphone_14_pro_max_5g_4gb_128gb_chryso.jpeg",
        price: 1231.98,
        quantity: 10,
        product_type: "mobilephone",
        product_color: "gold",
        brand: "Apple",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec mauris finibus," +
        "congue justo id, pellentesque dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." +
        " Aliquam et justo vitae leo lobortis interdum eu in eros. Nulla convallis faucibus dui, ac finibus augue feugiat et.",
        seller_username: "admin"
    }
];

export default dummyproducts
