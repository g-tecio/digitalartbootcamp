<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="9">
          <div class="cartStyle">
            <div style="padding-left:2%; padding-right:2%;">
              <div class="card-title">
                <h2 style="text-align: left;">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 224 224"
                    style=" fill:#000000;"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style="mix-blend-mode: normal"
                    >
                      <path d="M0,224v-224h224v224z" fill="none"></path>
                      <g fill="#4b86b4">
                        <path
                          d="M14.93333,14.93333c-2.69275,-0.03808 -5.19741,1.37667 -6.55489,3.70252c-1.35749,2.32585 -1.35749,5.20245 0,7.5283c1.35749,2.32585 3.86215,3.7406 6.55489,3.70252h14.02917c1.68674,0 3.09422,1.05626 3.57292,2.68333l31.82083,108.17916c2.79278,9.49546 11.57534,16.07084 21.48125,16.07084h81.95833c10.06817,0 18.95787,-6.80443 21.61251,-16.50834l19.39583,-71.12291c0.61356,-2.24579 0.14459,-4.64926 -1.26824,-6.49966c-1.41282,-1.8504 -3.60783,-2.93599 -5.93593,-2.93576h-145.49792l-9.23125,-31.39792c-0.00486,0 -0.00972,0 -0.01458,0c-2.32879,-7.91533 -9.64982,-13.40208 -17.89375,-13.40208zM89.6,171.73333c-8.24745,0 -14.93333,6.68588 -14.93333,14.93333c0,8.24745 6.68588,14.93333 14.93333,14.93333c8.24745,0 14.93333,-6.68588 14.93333,-14.93333c0,-8.24745 -6.68588,-14.93333 -14.93333,-14.93333zM164.26667,171.73333c-8.24745,0 -14.93333,6.68588 -14.93333,14.93333c0,8.24745 6.68588,14.93333 14.93333,14.93333c8.24745,0 14.93333,-6.68588 14.93333,-14.93333c0,-8.24745 -6.68588,-14.93333 -14.93333,-14.93333z"
                        ></path>
                      </g>
                    </g>
                  </svg> My Cart
                </h2>
              </div>
              <div class="checkout-box">
                <ul class="checkout-list">
                   
                  <li class="checkout-product">
                    <img src="https://www.pexels.com/photo/black-and-silver-dslr-lens-1208074/" alt class="product-image">
                    <h3 class="product-name">Camera</h3>
                    <span class="product-price">$500</span>
                    <button class="product-remove" >X</button>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </b-col>

        <b-col cols="3">
          <div class="cartStyle">
            <div style="padding-left:2%; padding-right:2%;">
              <div class="card-title">
                <h2 style="text-align: left;">Price Details</h2>
              </div>
              <div class="price-details">
                <div class="price-details-row">
                  <h5>Total</h5>
                  <hr>
                </div>
                <div class="price-details-row">
                  <h4>Paid Total</h4>
                </div>
                <div class="buyNow">
                  <b-row style="padding-left: 5%; padding-right: 5%; ">
                    <router-link to="/Payment" tag="button" class="btnBuyNow">Buy now</router-link>
                  </b-row>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<style  >
body {
  font-family: graphik, Helvetica Neue, Helvetica, Arial, sans-serif;

  color: #333;
  background: #ebf2f7;
}

.price-details-row {
  text-align: left;
}
.buyNow {
  padding-bottom: 2%;
  padding-top: 3%;
}

.card-title {
  border-style: hidden hidden solid hidden;
  border-width: 2px;
  border-color: #4b86b4;
}
.btnBuyNow {
  background-color: #63ace5;
  width: 90%;

  margin: auto;
  border-color: #63ace5;
  font-size: 25px;
  color: white;
  border-radius: 5px;
}

.cartStyle {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(99, 172, 229, 0.2),
    0 6px 20px 0 rgba(99, 172, 229, 0.19);
}
 
 .checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }
  .checkout-list {
    padding: 0;
  }
  .checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }
  
  .product-image {
    grid-column: 1/2;
    width: 50%;
  }
  .product-name {
    box-sizing: border-box;
  }
  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }
  .product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
  }
</style>

