<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="8" class="cartStyle">
          <div>
            <div class="card-title">
              <h2 style="text-align: left;">Choose Your Payment</h2>
            </div>
            <div>
              <b-tabs>
                <b-tab active>
                  <!-- Add your custom title here-->
                  <template slot="title">
                    <img src="https://img.icons8.com/color/48/000000/bank-cards.png">
                    <strong>Credit Card</strong>
                  </template>
                  <div class="form-card">
                    <b-form>
                      <!--Card Name-->
                      <b-form-group
                        id="exampleInputGroup1"
                        label="Full name (on the card)"
                        label-for="cardName"
                      >
                        <b-form-input id="cardName" required></b-form-input>
                      </b-form-group>
                      <!--Card Number-->
                      <b-form-group>
                        <label for="cardNumber">Card number</label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            required
                            name="cardNumber"
                            placeholder
                          >
                          <div class="input-group-append">
                            <span class="input-group-text text-muted">
                              <img src="https://img.icons8.com/small/16/000000/visa.png">
                              <img
                                src="https://img.icons8.com/small/16/000000/mastercard-credit-card.png"
                              >
                            </span>
                          </div>
                        </div>
                      </b-form-group>
                      <!--Date-->
                      <div class="row">
                        <div class="col-sm-8">
                          <div class="form-group">
                            <label>
                              <span class="hidden-xs">Expiration</span>
                            </label>
                            <div class="input-group">
                              <input type="number" class="form-control" placeholder="MM" name>
                              <input type="number" class="form-control" placeholder="YY" name>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group">
                            <label id="cvv">
                              CVV
                              <img src="https://img.icons8.com/small/16/000000/help.png">
                              <b-tooltip
                                target="cvv"
                                title="3 digits code on back side of the card"
                              ></b-tooltip>
                            </label>
                            <input type="number" class="form-control" required>
                          </div>
                          <!-- form-group.// -->
                        </div>
                      </div>
                      <!-- row.// -->
                    </b-form>
                  </div>
                </b-tab>
                <b-tab>
                  <!-- Add your custom title here-->
                  <template slot="title">
                    <img src="https://img.icons8.com/color/48/000000/paypal.png">
                    <strong>Paypal</strong>
                  </template>

                  <div class="row" style="padding-top: 5%;">
                    <div style=" width: 100%; text-align: left; padding-left: 5%;">
                      <p>Paypal is easiest way to pay online.</p>
                    </div>

                    <div class="col-md-4 pb-2">
                      <b-button variant="primary">Login in Paypal</b-button>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </b-col>
        <b-col cols="1"></b-col>
        <b-col cols="3" class="cartStyle">
          <div>
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
              <div class="buy-now">
                <b-row style="padding-left: 5%; padding-right: 5%;   ">
                  <router-link to="/Payment" tag="button" class="btnBuyNow">PAY NOW</router-link>
                </b-row>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.price-details-row {
  text-align: left;
}

.card-title {
  border-style: hidden hidden solid hidden;
  border-width: 2px;
  border-color: #4b86b4;
}

.form-card {
  padding-top: 5%;
  text-align: left;
  width: 80%;
}
</style>
