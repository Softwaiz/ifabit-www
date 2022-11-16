// modi
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarousselEchange.css";
import airtel from "../assets/img/devises/airtel.jpg";
import binance from "../assets/img/devises/binance.png";
import btc from "../assets/img/devises/btc.jpg";
import cardano from "../assets/img/devises/cardano.png";
import chainlink from "../assets/img/devises/chainlink.jpg";
import decetralana from "../assets/img/devises/decetralana.jpg";
import eos from "../assets/img/devises/eos.jpg";
import ether from "../assets/img/devises/ether.png";
import freesn from "../assets/img/devises/freesn.jpg";
import moovbj from "../assets/img/devises/moovbj.jpg";
import mtnbj from "../assets/img/devises/mtnbj.png";
import moovtg from "../assets/img/devises/moovtg.jpg";
import mtnci from "../assets/img/devises/mtnci.jpg";
import orangeci from "../assets/img/devises/orangeci.jpg";
import orangemali from "../assets/img/devises/orangemali.jpg";
import orangesn from "../assets/img/devises/orangesn.png";
import PM from "../assets/img/devises/PM.png";
import polkadot from "../assets/img/devises/polkadot.png";
import polygon from "../assets/img/devises/polygon.jpg";
import ripple from "../assets/img/devises/ripple.jpg";
import sandbox from "../assets/img/devises/sandbox.jpg";
import solana from "../assets/img/devises/solana.jpg";
import tetherusd from "../assets/img/devises/tetherusd.png";
import tmoney from "../assets/img/devises/tmoney.png";

function CarousselEchange() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      arrows={false}
      showDots={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      transitionDuration={600}
      containerClass="carousel-container"
    >
      <div>
        <img src={airtel} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">Airtel</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={btc} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">btc</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={binance} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">binance</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={cardano} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">cardano</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={chainlink} alt="" id="imgdevise" />
        <div className="col-3  " id="labeldevise">
          <h2 id="labdevh2">chainlink</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={decetralana} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">decetralana</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={eos} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">eos</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={ether} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">ether</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={freesn} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">free sn</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={moovbj} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">moov bj</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={mtnbj} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">mtn bj</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={moovtg} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">moov tg</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={mtnci} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">mtn ci </h2>

          <div className="col-3" id="achatvente">
		  
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={orangeci} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">orange ci</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={orangemali} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">orange mali</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={orangesn} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">orange sn</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={PM} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">pm</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={polkadot} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">polkadot</h2>

          <div className="col-3 " id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={polygon} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">polygon</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={ripple} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">ripple</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={sandbox} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">Sandbox</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={solana} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">Solana</h2>

          <div className="col-3 " id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={tetherusd} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">tether usd</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={tmoney} alt="" id="imgdevise" />
        <div className="col-3 " id="labeldevise">
          <h2 id="labdevh2">tmoney</h2>

          <div className="col-3" id="achatvente">
            <span className="badge bg-success" id="bg-success-achat">
              achat
            </span>
            <span className="badge bg-danger" id="bg-success-vente">
              vente
            </span>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default CarousselEchange;
