function buyNow(productName, productPrice, productImage) {
  // Get the existing cart from localStorage or create a new empty array
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Create a new product object
  const product = {
    name: productName,
    price: productPrice,
    image: productImage,
  };

  // Add the new product to the cart
  cart.push(product);

  // Save the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirect to the checkout page
  window.location.href = "../../checkout.html";
}
const pcComponents = [
  // cpu
  {
    name: "Intel Core i9-10980XE Extreme Edition",
    price: 26995,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvqym8FK_CZpOu9O91b6ZItDSokAqN8B_TQ&s",
    link: "cpu/i9_extreme.html",
  },
  {
    name: "AMD Ryzen 9 7950X",
    price: 41115,
    image:
      "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-9-7900x.jpg",
    link: "cpu/ryzen9_7950x.html",
  },
  {
    name: "Intel Core i7 13700",
    price: 25999,
    image:
      "https://bermorzone.com.ph/wp-content/uploads/2023/01/intel-core-i7-13700-philippines-btz-ph-600x600.jpg",
    link: "cpu/i7_13700.html",
  },
  {
    name: "AMD Ryzen 7 5800X",
    price: 11595,
    image:
      "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-7-5800x.jpg",
    link: "cpu/ryzen7_5800x.html",
  },
  {
    name: "Intel Core i5 12600K",
    price: 16295,
    image: "https://joebz.com/cdn/shop/products/i5_1024x1024.png?v=1648715332",
    link: "cpu/i5_12600k.html",
  },
  // gpu
  {
    name: "MSI GeForce RTX 4090 GAMING X SLIM 24G",
    price: 109995,
    image:
      "https://bermorzone.com.ph/wp-content/uploads/2023/11/MSI-GeForce-RTX-4090-GAMING-X-SLIM-24G.webp",
    link: "gpu/msi_geforce_rtx_4090.html",
  },
  {
    name: "MSI GeForce RTX 4070 Ti Gaming X Slim BLACK",
    price: 53999,
    image:
      "https://bermorzone.com.ph/wp-content/uploads/2023/01/geforce-rtx-4070-ti-gaming-x-slim-12g-ph-65952c9914291.webp",
    link: "gpu/geforce_rtx_4070_ti.html",
  },
  {
    name: "Asrock Radeon RX 7900 XT",
    price: 61795,
    image: "https://www.dateks.lv/images/pic/2400/2400/771/1351.jpg",
    link: "gpu/asrock_radeon_rx_7900_xt.html",
  },
  {
    name: "MSI Gaming GeForce RTX 3060",
    price: 17500,
    image: "https://m.media-amazon.com/images/I/71tduSp8ooL._AC_SL1500_.jpg",
    link: "gpu/msi_gaming_geforce_rtx_3060.html",
  },
  {
    name: "ASRock > AMD Radeon™ RX 6700 XT Challenger D",
    price: 24995,
    image:
      "https://www.asrock.com/Graphics-Card/photo/Radeon%20RX%206700%20XT%20Challenger%20D%2012GB(M1).png",
    link: "gpu/asrock_amd_radeon_rx_6700_xt_challenger_d.html",
  },
  // psu
  {
    name: "Corsair RM850x",
    price: 12222,
    image:
      "https://ecommerce.datablitz.com.ph/cdn/shop/files/0840006667506.jpg?v=1725160941",
    link: "psu/corsair_rm850x.html",
  },
  {
    name: "be quiet! Pure Power 13 M 850W",
    price: 8995,
    image:
      "https://hwbusters.com/wp-content/uploads/2025/06/be-quiet-Pure-Power-13-M-850W.jpg",
    link: "psu/be_quiet_pure_power_13_m_850w.html",
  },
  {
    name: "MSI MAG A550BN Bronze 550W",
    price: 2450,
    image:
      "https://dynaquestpc.com/cdn/shop/products/MSIMAGA650BN_afc8db2c-a333-4f46-8c9f-566613081183.png?v=1630704094&width=640",
    link: "psu/msi_mag_a550bn_bronze_550w.html",
  },
  {
    name: "EVGA SuperNOVA 1600 G+",
    price: 18995,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1WRaQg6wwiMDvJn80-amdjpDbovTfc318hg&s",
    link: "psu/evga_supernova_1600_g_plus.html",
  },
  {
    name: "Thermaltake Toughpower GF A3 1050W",
    price: 9295,
    image:
      "https://ecommerce.datablitz.com.ph/cdn/shop/files/csacsa-csagsa-gsa_800x.jpg?v=1711943361",
    link: "psu/thermaltake_toughpower_gf_a3_1050w.html",
  },
  // networking devices
  {
    name: "TP-Link ER605 Gigabit VPN Router",
    price: 2342,
    image: "https://m.media-amazon.com/images/I/61lIwZudsiL._AC_SL1500_.jpg",
    link: "networking/tp_link_er605_gigabit_vpn_router.html",
  },
  {
    name: "PLDT/Smart Bro Home WiFi Modem",
    price: 1095,
    image:
      "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/1/6/166687_2022_1.jpg?auto=webp&format=pjpg&width=640",
    link: "networking/pldt_smart_bro_home_wifi_modem.html",
  },
  {
    name: "TP-Link TL-SG1008 8-Port Gigabit Switch",
    price: 2199,
    image:
      "https://www.gigahertz.com.ph/cdn/shop/files/tp-link-sg1008-8-port-gigabit-switch-tp-link-gigahertz-831707_1024x.jpg?v=1734320141",
    link: "networking/tp_link_tl_sg1008_8_port_gigabit_switch.html",
  },
  {
    name: "Netgear Orbi Mesh WiFi 6 System",
    price: 33160,
    image:
      "https://netgearstore.ph/cdn/shop/products/RBK853-100EUS.png?v=1655348596",
    link: "networking/netgear_orbi_mesh_wifi_6_system.html",
  },
  {
    name: "Siemon UTP Cable Cat6 24 AWG 305m",
    price: 9000,
    image:
      "https://www.twowaycommunications.co.ke/uploads/img/pages/siemon-cat-6-utp-ethernet-cable.webp",
    link: "networking/siemon_utp_cable_cat6_24awg_305m.html",
  },
  // storage & power devices
  {
    name: "Samsung 990 EVO M.2 1TB PCIe 4.0 NVMe SSD",
    price: 6095,
    image:
      "https://dynaquestpc.com/cdn/shop/files/63_d533b025-e63c-4477-b0c8-05909d94a3ca.png?v=1710386311&width=640",
    link: "storage_power_devices/samsung_990_evo_m2_1tb_pcie_4_nvme_ssd.html",
  },

  {
    name: "WD My Passport 2TB USB 3.0 External",
    price: 4395,
    image:
      "https://ecommerce.datablitz.com.ph/cdn/shop/products/MyPassport-1TB-2TB-Black-Angled-Right.png.wdthumb.1280.1280_2452ed15-b529-4426-84d7-7ec9264d409c_1024x.png?v=1740635872",
    link: "storage_power_devices/wd_my_passport_2tb_usb_3_0_external.html",
  },
  {
    name: "Synology DiskStation DS124 NAS",
    price: 53999,
    image:
      "https://www.synology.com/img/products/detail/DS124/img_og_image.jpg",
    link: "storage_power_devices/synology_diskstation_ds124_nas.html",
  },
  {
    name: "UGREEN NASync DXP2800 2-Bay NAS",
    price: 23051,
    image: "https://m.media-amazon.com/images/I/61WvMIHMDcL._AC_SL1500_.jpg",
    link: "storage_power_devices/ugreen_nasync_dxp2800_2_bay_nas.html",
  },
  {
    name: "APC Back-UPS, 2200VA",
    price: 16050,
    image: "https://media.rs-online.com/Y2877242-01.jpg",
    link: "storage_power_devices/apc_back_ups_2200va.html",
  },
  {
    name: "SUPERMICRO Mini PC Server System",
    price: 29795,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQtHlYpUucZjat2Dxmm6eC5ONw5nasCG1yBfTJdwGAuTERpP3MSJK54C5ZPLKyTFj9ARzRjpQXkXC5bpITcIClt8z3WUMEn0LihDo9f1o2RfERAaKbVRk1",
    link: "storage_power_devices/supermicro_minipc_server.html",
  },
  // smart devices
  {
    name: "SONOFF NSPanel Pro Smart Home Control Panel",
    price: 12222,
    image:
      "https://sonoff.tech/cdn/shop/files/NS_PRO.png?v=1751007476&width=2048",
    link: "smart_devices/sonoff_nspanel_pro_smart_home_control_panel.html",
  },
  {
    name: "TP-Link Tapo C200 Pan/Tilt Home WiFi Camera",
    price: 1050,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtD4XoJE67b6HPkGtg_WSV6JX8wn7zAFki0Q&s",
    link: "smart_devices/tp_link_tapo_c200_pan_tilt_home_wifi_camera.html",
  },
  {
    name: "Philips EasyKey DDL801 Fingerprint Smart Door Lock",
    price: 38000,
    image:
      "https://larxtrading.com.ph/wp-content/uploads/2025/02/Philips-DDL801-5HBS.webp",
    link: "smart_devices/philips_easykey_ddl801_fingerprint_smart_door_lock.html",
  },
  {
    name: "Aqara Smart Wall Switch (Zigbee, neutral / no-neutral variants)",
    price: 2000,
    image:
      "https://www.aqara-shop.co.uk/wp-content/uploads/2023/03/wall-switch-4.jpg",
    link: "smart_devices/aqara_smart_wall_switch.html",
  },
  {
    name: "Google Nest Temperature Sensor",
    price: 3000,
    image: "https://m.media-amazon.com/images/I/6156ph13zPL._AC_SL1500_.jpg",
    link: "smart_devices/google_nest_temperature_sensor.html",
  },
];

const pcComponentsContainer = document.getElementById("pcComponents");

pcComponents.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.className = "card";

  productCard.innerHTML = `<img
                src="${product.image}"
                alt="${product.name}"
              />
              <div>
                <a
                  href="${product.link}"
                  style="text-decoration: none; color: black"
                  >${product.name}</a
                >
              </div>
              <div class="price">₱${product.price.toLocaleString()}</div>
              <div class="button-group">
                <button onclick="buyNow('${product.name}', ${product.price}, '${
    product.image
  }')">Buy Now</button>
                <button class="cart-btn"><i class="fa-solid fa-cart-shopping"></i></button>
              </div>`;

  pcComponentsContainer.appendChild(productCard);
});

//  add to cart functionality
document.querySelectorAll(".cart-btn").forEach((button, index) => {
  button.addEventListener("click", () => {
    const product = pcComponents[index];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
  });
});
