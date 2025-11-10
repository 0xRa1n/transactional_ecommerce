const products = [
  // cpu
  {
    name: "Intel Core i9-10980XE Extreme Edition",
    url: "/products/computer_components/cpu/i9_extreme.html",
  },
  {
    name: "AMD Ryzen 9 7950X",
    url: "/products/computer_components/cpu/ryzen9_7950x.html",
  },
  {
    name: "Intel Core i7 13700",
    url: "/products/computer_components/cpu/i7_13700.html",
  },
  {
    name: "AMD Ryzen 7 5800X",
    url: "/products/computer_components/cpu/ryzen7_5800x.html",
  },
  {
    name: "Intel Core i5 12600K",
    url: "/products/computer_components/cpu/i5_12600k.html",
  },
  // gpu
  {
    name: "MSI GeForce RTX 4090 GAMING X SLIM 24G",
    url: "/products/computer_components/gpu/msi_geforce_rtx_4090.html",
  },
  {
    name: "MSI GeForce RTX 4070 Ti Gaming X Slim BLACK",
    url: "/products/computer_components/gpu/geforce_rtx_4070_ti.html",
  },
  {
    name: "Asrock Radeon RX 7900 XT",
    url: "/products/computer_components/gpu/asrock_radeon_rx_7900_xt.html",
  },
  {
    name: "MSI Gaming GeForce RTX 3060",
    url: "/products/computer_components/gpu/msi_gaming_geforce_rtx_3060.html",
  },
  {
    name: "ASRock > AMD Radeon™ RX 6700 XT Challenger D",
    url: "/products/computer_components/gpu/asrock_amd_radeon_rx_6700_xt_challenger_d.html",
  },
  // psu
  {
    name: "Corsair RM850x",
    url: "/products/computer_components/psu/corsair_rm850x.html",
  },
  {
    name: "be quiet! Pure Power 13 M 850W",
    url: "/products/computer_components/psu/be_quiet_pure_power_13_m_850w.html",
  },
  {
    name: "MSI MAG A550BN Bronze 550W",
    url: "/products/computer_components/psu/msi_mag_a550bn_bronze_550w.html",
  },
  {
    name: "EVGA SuperNOVA 1600 G+",
    url: "/products/computer_components/psu/evga_supernova_1600_g_plus.html",
  },
  {
    name: "Thermaltake Toughpower GF A3 1050W",
    url: "/products/computer_components/psu/thermaltake_toughpower_gf_a3_1050w.html",
  },
  // networking devices
  {
    name: "TP-Link ER605 Gigabit VPN Router",
    url: "/products/hardware/networking/tp_link_er605_gigabit_vpn_router.html",
  },
  {
    name: "PLDT/Smart Bro Home WiFi Modem",
    url: "/products/hardware/networking/pldt_smart_bro_home_wifi_modem.html",
  },
  {
    name: "TP-Link TL-SG1008 8-Port Gigabit Switch",
    url: "/products/hardware/networking/tp_link_tl_sg1008_8_port_gigabit_switch.html",
  },
  {
    name: "Netgear Orbi Mesh WiFi 6 System",
    url: "/products/hardware/networking/netgear_orbi_mesh_wifi_6_system.html",
  },
  {
    name: "Siemon UTP Cable Cat6 24 AWG 305m",
    url: "/products/hardware/networking/siemon_utp_cable_cat6_24awg_305m.html",
  },
  // storage & power devices
  {
    name: "Samsung 990 EVO M.2 1TB PCIe 4.0 NVMe SSD",
    url: "/products/hardware/storage_power_devices/samsung_990_evo_m2_1tb_pcie_4_nvme_ssd.html",
  },

  {
    name: "WD My Passport 2TB USB 3.0 External",
    url: "/products/hardware/storage_power_devices/wd_my_passport_2tb_usb_3_0_external.html",
  },
  {
    name: "Synology DiskStation DS124 NAS",
    url: "/products/hardware/storage_power_devices/synology_diskstation_ds124_nas.html",
  },
  {
    name: "UGREEN NASync DXP2800 2-Bay NAS",
    url: "/products/hardware/storage_power_devices/ugreen_nasync_dxp2800_2_bay_nas.html",
  },
  {
    name: "APC Back-UPS, 2200VA",
    url: "/products/hardware/storage_power_devices/apc_back_ups_2200va.html",
  },
  {
    name: "SUPERMICRO Mini PC Server System",
    url: "/products/hardware/storage_power_devices/supermicro_minipc_server.html",
  },
  // smart devices
  {
    name: "SONOFF NSPanel Pro Smart Home Control Panel",
    url: "/products/hardware/smart_devices/sonoff_nspanel_pro_smart_home_control_panel.html",
  },
  {
    name: "TP-Link Tapo C200 Pan/Tilt Home WiFi Camera",
    url: "/products/hardware/smart_devices/tp_link_tapo_c200_pan_tilt_home_wifi_camera.html",
  },
  {
    name: "Philips EasyKey DDL801 Fingerprint Smart Door Lock",
    url: "/products/hardware/smart_devices/philips_easykey_ddl801_fingerprint_smart_door_lock.html",
  },
  {
    name: "Aqara Smart Wall Switch (Zigbee, neutral / no-neutral variants)",
    url: "/products/hardware/smart_devices/aqara_smart_wall_switch.html",
  },
  {
    name: "Google Nest Temperature Sensor",
    url: "/products/hardware/smart_devices/google_nest_temperature_sensor.html",
  },
  {
    name: "Technical Support & Maintenance",
    url: "/products/software/software.html",
  },
  {
    name: "Cloud Hosting",
    url: "/products/software/software.html",
  },
  {
    name: "Cybersecurity Services",
    url: "/products/software/software.html",
  },
];

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  searchResults.innerHTML = "";

  if (searchTerm.length > 0) {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );

    if (filteredProducts.length > 0) {
      filteredProducts.forEach((product) => {
        const resultItem = document.createElement("a");
        resultItem.href = product.url; // Use the root-relative URL directly
        resultItem.textContent = product.name;
        searchResults.appendChild(resultItem);
      });
      searchResults.style.display = "block";
    } else {
      searchResults.style.display = "none";
    }
  } else {
    searchResults.style.display = "none";
  }
});

// Hide results when clicking outside
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target)) {
    searchResults.style.display = "none";
  }
});
