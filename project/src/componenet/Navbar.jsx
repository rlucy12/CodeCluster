
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
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="logo">pepperfry</div>

      <ul className="nav-links">
        <li>
          <a onClick={() => nav("/registration")}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfNP__EGAcz_0-ZyETlUBdMOVQM934MdkCg&usqp=CAU"
              height="30px"
              width="30px"
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
          <a href="#">
            <img
              src="data:image/png;base64,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"
              width="30x"
              height="30px"
            ></img>
          </a>
        </li>
        <li>
          <a href="#">
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
            <li>SELL ON PEPPERFRY</li>
            <li>BECOME A FRANCHISEE</li>
            <li>BUY IN BULK</li>
            <li>FIND A STUDIO</li>
            <li>GIFT CARD</li>
            <li>GET INSPIRED</li>
            <li>TRACK YOUR ORDER</li>
            <li><a onClick={() => nav("/contactus")}>CONTACT US</a></li>
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
