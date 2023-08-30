
import React from "react";
import "./nav.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";


const NavigationBar = () => {
  const nav = useNavigate();
  // function onSubmit() {
  //   nav("/about");
  // }
  return (
    <div className="navbar">
      <input type="text" className="search-bar" placeholder="Search..." style={{height:"30px"}}/>
      {/* <div className="logo">pepperfry</div> */}
      <a onClick={() => nav("/home")}>
        <img
          src="https://ii1.pepperfry.com/assets/pf-logo-w-23-Aug.png"
          width="170px"
          height="42px"
          justify-content="space-around"
          margin="1cm"
        ></img>
      </a>

      <ul className="nav-links">
        <li>
          <a onClick={() => nav("/registration")}>
            <img
              src="https://ii1.pepperfry.com/assets/w22-profile-icon.svg"
              height="32px"
              width="32px"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEX///8AAABnZ2dtbW3x8fH8/Pz29vaGhoZFRUXCwsLHx8fg4OBMTEx0dHReXl7a2tqtra3r6+t/f3+mpqafn588PDwbGxvOzs65ubkVFRUvLy8hISGVlZWNjY0oKChUVFQLCwvM09kAAAAE2ElEQVR4nO1baZeqMAx1AWQRZBEU9///K9+YtIgOW5OUOe8c76dhFFLa3Js0jYvFF1/8z4iCy3p9CaK/Mh+fl4Bz/CdDOC5bOM5v/7J8w2Vu+8XyA8W89qMazfpJ4uNf9bx+EKP3Bc+/A/TFeE77Hpg8OXjlnODSm3EAyICDvjzMzgSggO/qS9efmwj502Defz3PAMrYBy7UflzOPIDd/VMFnrjv5rGepdtHl/3l8rEtHPvmr1W3dUR1zaya9zZD1hEbi3qQtg3dVvm+OAbBsdjnq1v7k9SS+Sh5zXRSRI77+sh1oiJ5rU1iJS4oyf9BWXQaiIpSfwODhCz2jfmw/0thM4S9sHk31uZHFD/QQ4jd4S8a2l+px15HXdy7qq+uJEeg7NcDs/9CqJKVlZx9xX5/os45KknaSNnfm66q9hghTwzwabnBmro53iPCxgxVLjG7C0XrJhEZ8FGloU+7JWXYXcD0rzKOsw4qMztR9DDjncS/d4Rw44kbG5EBpGwrl2CC8kCSqLkSfnjhLCSmD6xsHT3AlAEayASWFyAFyBlOyiYCaMCJnOrippGhBehGV/oDrnQXBuAKMBK8iLkGwGSfkVjgrpW8Z0MvZqyAWgMqixYZP6RiKKd6MdYdWGKOpZTD+Bc7gZUwjv3FAh5BraCBD255A9hyvDARyCw3DClySpYOI0CNS5oXRtRUpI2QoWVAAm4BFEuqNBrA7J2YGyz3RF/HWIAEiga0Mi6LQQ3oXPYYk9dCSs6Kooqjog3AlSuKKwOBHuxqT/SgkpkjIS3Q5Ywjom2QBZ3BnzeQ2czLyF9IiUHdYaUSLRyISRHeJ1BgyIhvAunQTaDw7J1pSRGSQKDW5xJpsBKJBE9ANDAuGrowcSJ1Nqhx3Ezn0pFIhxAhiQY7KRJoGpieaFHlowskSQMSlDIDKCk0WAtFgicgGqzN7sGCt1BTAmja1FK7AqYRQic/ASG1ARI8hM5idw9zGkBx5ix0BInRwKxQI0kCEg3uBMftB1DqbnIHVofEzv6ABkaVItwTiB1/hsZ7g0JmT6CBpDZQFayQGi3aMLDjYvoa4KmbYHMWlrumKruHRx1nwXYMB0/e80nCkqlzT9E2BNX64E9IMHSboODJ7xP69HtMD5smka3o6fuPX2/Vg4dbTDLdIJSId6J4ugEkGVgGT3cfWGkL0z2YZf/LqYWqBHaEXTicR9zrMD5HPGTqDfteEPXnKux+b7gOKRKqhTD9PrEa0LhocHqEgMvcHeZCw4hBgjvwlgInNOMYOsPBJbDQhNVGMLAEWNETy0S7gefZPYEWw7DNzkzVC9pX98A1WNbJyhIS1WPVm+vpNjDLGDiLTcbv5mOo/OtO6BnlYjOsNKFv17w/XnY6pPm6D5DWVL0fr2E/s+39OE+5Qj9yGI6lNZtShgWv3g0Ddj1ZbW0GIetLWDHxtCul+I49uTVm9NL9tO/IIGmpOkOmBy54tttcrtpLO7UEVUyskbQHmdrl/XID1cVpewKaXd76g4vOGv9vq7G9BZVan9888ahSfrGy0hD0Lu+U7mAh3F16Uv9in7VPgtPEzLq8J8m9rPV1Yv8XHgBPd7p/IJ7vt1bHLvsz+N8Lzq/EYTPT9DfI9vdm7ev73jr9uxAFxU/qkBd/9qvXL74QwT9eZS7mdPpGTAAAAABJRU5ErkJggg=="
              height="30px"
              width="30px"
            />
          </a>
        </li>

        <li>
          <a onClick={() => nav("/wishlist")}>
            <img
              src="https://ii1.pepperfry.com/assets/w22-pf-wishlist-icon.svg"
              width="30x"
              height="30px"
            ></img>
          </a>
        </li>
        <li>
          <a onClick={() => nav("/cart")}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///8AAAD09PRtbW2/v79zc3P39/eenp5BQUH7+/vj4+Pr6+vKysrPz8+Hh4eLi4vd3d0lJSWwsLA2NjZmZmZISEiAgIAQEBC4uLioqKhRUVEqKiqVlZVbW1scHBzV1dXN45WCAAADNUlEQVRoge2a63KCMBCFFQHlYlWsLRUv7/+Wdap7IJLg7qYw006+vxAO5LJ7smQ2CwQCgUDgb5KWyx5xNIXy9jC30MTjK0d7m/KNfHTpL4fy/G106Q+XdDO69MYlPd+OLb11Sp/Glp6dXNLHbHTt+LwyaKab47eg0iWrSfprAuknSPp9eunzQ/pSTC5d0WdPEEyfyEk6mVx6RgllP0n+MljSZ5eTS19J2pVC0khKytVeUY9br+bvzuDrZs+MEsgpV8vF65DCALxJu6bbl5aLVlfDgTVzYF1W/WuFVnm+YX12Qrf3A5pe+oMlHdPtVf/aRStteZaF4vNxuyWFVIPPd8NNCVg/Fr+wHBJww+vvFykkKmM+GB+u1yuk7+oCs+bMbnJ8tGg8HdpxqPvsYEBtAY0PEvCKnwVhkv08MUKyLS66oOXl5YkzzG+J2XqjRj6eGDs60WwtNV31RIZUI9pFZdTj/FXRAxnwIGtHAe2i73FkoVrWrla2a8mp4+bShhQC1bsQ7CR5mboDBaKd0hO3tRLxkGFlKHchGDH5RN3SUClTCFaW3M5n6HGVMpzrShEPMU1UKQQrS7NPx3trUkhEjXeavXJEuxBNIUsXvgGKaooXFxsjE6QQ+XChqTIgRfoUAkurLU1glkoDGoyR2tupyyoqY2SAFSIsq0Q7bXe1KFMIemuhVm498VrSqjVGHlYanlhUmYcxsuzP+dCgHdiFmBsLkubtax1gqgqCEoyR1mTcQVQ6JmywzxIbI4MUy0SB5z+M5LWCC4+V9UP8WsKFb52zUPe4aFFYOb8WseP/A6N+LWKl+YWStvsv3CB+5YgH181CSrL0HuhAIBD4J6RlVSvMRl5XpV/6SO/b3EZYOovvtaPE4wd4e3xD5HXghfU+Je8YFEFtoHvKRlvkXHSewf8A45+nsraLutkP7OqAaWF1n23+S2u4c8Z4YaVBezJGzCUWma10B7hM6c8ppU0ryj4zYf5u1XV4bowae2WbJ9iUUcV4CLuskHdbacv4RefcoaBM2jlGpj9LlENbNFswP3ceu9zs/gUHYSwu75v7k+c2IC/XiuwXrcvRzyYGAoFAIBAI/C7fGl0gPopz+SEAAAAASUVORK5CYII="
              width="30px"
              height="30px"
            ></img>
          </a>
        </li>
        {/* <li>SELL ON PEPPERFRY</li>
          <li>BECOME A FRANCHISEE</li>
          <li>BUY IN BULK</li>
          <li>FIND A STUDIO</li>
          <li>GIFT CARD</li>
          <li>CONTACT US</li> */}
      </ul>

      <div className="navbar1">
        <ul className="nav-links">
          <li>
            <a onClick={() => nav("/seller")}>SELL ON PEPPERFRY</a>
          </li>
          <li>BECOME A FRANCHISEE</li>
          <li>BUY IN BULK</li>
          <li>FIND A STUDIO</li>
          <li>GIFT CARD</li>
          <li>GET INSPIRED</li>
          <li>TRACK YOUR ORDER</li>
          <li>
            <a onClick={() => nav("/contactus")}>CONTACT US</a>
          </li>
        </ul>
      </div>
      <div className="subnavbar">
        <ul className="subnav-links">
          <li class="nav-item">
            <a onClick={() => nav("/furniture")}>Furniture</a>
          </li>
          <li>
            <a onClick={() => nav("/sofasAndSeatings")}>Sofas & Seating</a>
          </li>
          <li>
            <a onClick={() => nav("/mattresses")}>Mattresses</a>
          </li>
          <li>
            <a onClick={() => nav("/homeDecor")}>Home Decor</a>
          </li>
          <li>
            <a onClick={() => nav("/furnishing")}>Furnishing</a>
          </li>
          <li>
            <a onClick={() => nav("/KitchenandDining")}>Kitchen & Dining</a>
          </li>
          <li>
            <a onClick={() => nav("/lampsandLighting")}>Lamps & Lighting</a>
          </li>
          <li>
            <a onClick={() => nav("/homeUtility")}>Home Utility</a>
          </li>
          <li>
            <a onClick={() => nav("/appliances")}>Appliances</a>
          </li>
          <li>
            <a onClick={() => nav("/modular")}>Modular</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
