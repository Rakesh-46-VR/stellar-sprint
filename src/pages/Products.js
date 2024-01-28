import React, { useState } from "react";
import "./Products.css";
const ProductDisplay = ({ products, displayType }) => {
  const getDisplayStyle = () => {
    switch (displayType) {
      case "flex":
        return {
          display: "flex",
          flexDirection:"column",
          justifyContent: "space-around",
          flexWrap: "wrap",
        };
      case "grid":
        return {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px))",
          gap: "16px",
        };
      case "row-flex":
        return { display: "flex", flexDirection: "row" };
      case "column-flex":
        return { display: "flex", flexDirection: "column" };
      default:
        return {};
    }
  };

  return (
    <div className="prods" style={getDisplayStyle()}>
      {products.map((product) => (
        <div className="indivProd"
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <img src={product.src} alt=""></img>
          <div className="productDescription">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ₿{product.price}</p>
          <button className="btnbuy">Buy</button>
          </div>
        </div>  
      ))}
    </div>
  );
};

const Products = () => {
  const [products] = useState([
    {name: "COMSAT",price: 4999,src: "https://rakesh-46.b-cdn.net/comsat.jpg",description: "Stay connected to Earth, even on the loneliest planet."},
    {name: "DUCT TAPE",price: 79,src: "https://rakesh-46.b-cdn.net/duct_tape.jpg",description:"MacGyver's best friend, fixes everything from leaks to spacesuit tears.",},
    {name: "3D PRINTER",price: 24999,src: "https://rakesh-46.b-cdn.net/3d_printer.jpg",description:"3D fabrication unit creates tools, parts, or even entire habitats from raw materials."},
    {name: "NUCLEAR POWERED BATTERY",price: 9999,src: "https://rakesh-46.b-cdn.net/ncp_battery.jpg",description: "Compact, long-lasting energy for any outpost.",},
    {name: "EJECTION PODS",price: 49999,src: "https://rakesh-46.b-cdn.net/ejection_pods.jpg",description:"Emergency escape pod ejects you from danger and keeps you alive until help arrives.",},
    {name: "KEVLAR SPACE SUIT",price: 1999,src: "https://rakesh-46.b-cdn.net/kevlar_suit.jpg",description: "Second skin for surviving harsh environments.",},
    {name: "SEE THROUGH THE X",price: 2599,src: "https://rakesh-46.b-cdn.net/the_X.jpg",description:"Hyperspectral imager reveals hidden resources on alien worlds.",},
    {name: "ALUMINIUM LEGO BLOCKS",price: 4999,src: "https://rakesh-46.b-cdn.net/Al_lego.jpg",description: "Build shelters, tools, or even spaceships."},
    {name: "CARBON SHEETS",price: 5999,src: "https://rakesh-46.b-cdn.net/carbon_sheets.jpg",description:"Lightweight, super-strong material for building or repairs."},
    {name: "DRINK ANYWHERE",price: 1999,src: "https://rakesh-46.b-cdn.net/drink_anywhere.jpg",description:"Portable water extractor turns ice, permafrost, or even air into life-giving H2O."},
    {name: "EPOXY",price: 6999,src: "https://rakesh-46.b-cdn.net/epoxy.jpg",description: "The universal space glue, bonds anything and everything.",},
    {name: "FARMING KIT",price: 29999,src: "https://rakesh-46.b-cdn.net/farming_kit.jpg",description:"Creates food, water, and oxygen from waste materials, minimizing dependence on external supplies.",},
    {name: "HEALTH IN YOUR VEINS.jpg",price: 2599,src: "https://rakesh-46.b-cdn.net/health.jpg",description:"Continuously tracks vital signs and transmits data for remote medical monitoring.",},
    {name: "HOLOGRAPHIC DISPLAY",price: 19999,src: "https://rakesh-46.b-cdn.net/holographic_display.jpg",description:"Holographic communication bridges the gap to Earth and beyond.",},
    {name: "MOXIE",price: 8999,src: "https://rakesh-46.b-cdn.net/moxie.jpg",description: "Make your own air from scratch, anywhere.",},
    {name: "TRACE GAS ANALYZER",price: 5999,src: "https://rakesh-46.b-cdn.net/gas_analy.jpg",description: "Sniff out resources and dangers in the alien air.",},
    {name: "MULTI TERRAIN ROVER",price: 49999,src: "https://rakesh-46.b-cdn.net/rover.jpg",description:"Navigates diverse planetary landscapes, from sand dunes to craters.",},
    {name: "NISSAR",price: 63999,src: "https://rakesh-46.b-cdn.net/nissar.jpg",description:"Creates detailed topographical maps of the surrounding area for exploration and resource identification.",},
    {name: "SILICA AEROGELS",price: 3299,src: "https://rakesh-46.b-cdn.net/silica_aerogels.jpg",description: "Super-insulation for frosty nights or scorching days.",},
    {name: "PERSONAL ROBOTS",price: 3999,src: "https://rakesh-46.b-cdn.net/auto_bots.jpg",description: "Your trusty assistants, building, exploring, and fixing.",},
    {name: "SCOUNTING DRONES",price: 4699,src: "https://rakesh-46.b-cdn.net/drones.jpg",description:"Autonomous swarm scouts, maps, and builds wherever you need.",},
    {name: "Shield from the storm rad",price: 5999,src: "https://rakesh-46.b-cdn.net/shield_rad.jpg",description: "Radiation tent gives temporary haven from cosmic blasts.",},
    {name: "SOALR SAILS",price: 199999,src: "https://rakesh-46.b-cdn.net/solar_sails.jpg",description: "Catch cosmic rays for limitless clean energy."},
    {name: "SPACE GUNS",price: 2599,src: "https://rakesh-46.b-cdn.net/space_guns.jpg",description: "For deterring hostile fauna, not interplanetary disputes.",},
    {name: "SPACE WELDING GUNS",price: 3699,src: "https://rakesh-46.b-cdn.net/space_weld.jpg",description: "Craft repairs or build structures with molten metal.",},
    {name: "SUIT FOR ALL",price: 5099,src: "https://rakesh-46.b-cdn.net/suit.jpg",description:"Adaptive suit adjusts to any environment, hot, cold, thin, or thick.",},
    {name: "THRUSTERS",price: 6399,src: "https://rakesh-46.b-cdn.net/thrusters.jpg",description:"Thrusters in space can be utilized for maneuvering and navigation during extravehicular activities or aiding astronauts in emergency situations."},
    {name: "TREADMILL",price: 8999,src: "https://rakesh-46.b-cdn.net/treadmill.jpg",description:"Enables astronauts to exercise effectively in low gravity to maintain muscle and bone health.",},
    {name: "UV SHEILD",price: 2999,src: "https://rakesh-46.b-cdn.net/uv_shield.jpg",description: "Block harmful solar radiation for crew safety.",},
    {name: "VITAMIN SUPPLEMENT",price: 599,src: "https://rakesh-46.b-cdn.net/vitamins.jpg",description:"Vitamin supplements for astronauts support optimal health, and enhance resilience during extended space missions.",},
  ]);

  return (
    <div className="productsBg">
      <div className="products">
        <h1>Products :</h1>
        <p>Home{">"}Products</p>
        <br></br>
        <ProductDisplay products={products} displayType="flex" />
      </div>
    </div>
  );
};

export default Products;
