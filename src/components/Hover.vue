<template>
    <b-container fluid class="p-4">
  <b-row>
    <b-col >
        <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://picsum.photos/250/250/?image=58"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;">
          <h4> encontraras todo lo que 
            necesites sobre naturaleza</h4>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >

        <h3 class="display-1 font-weight-light green--text mb-2">Naturaleza</h3>
      </v-card-text>
    </v-card>
  </v-hover>
    </b-col>
    <b-col>
            <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://picsum.photos/250/250/?image=59"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;">
          <h4>Conoce las opciones
            de arte contemporaneo
          </h4>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >

        <h3 class="display-1 font-weight-light green--text mb-2">Contemporaneo</h3>
      </v-card-text>
    </v-card>
  </v-hover>
    </b-col>
    <b-col>
            <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://picsum.photos/250/250/?image=56"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;">
          <h4>Explora las posibilidades del 
            arte Urbano
          </h4>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >

        <h3 class="display-1 font-weight-light green--text mb-2">Urbano</h3>
      </v-card-text>
    </v-card>
  </v-hover>
    </b-col>
      <b-col>
            <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://picsum.photos/250/250/?image=58"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;">
          <h4>un mundo de contrastes y 
            perspectivas diferentes</h4>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >

        <h3 class="display-1 font-weight-light green--text mb-2">Abstracto</h3>
      </v-card-text>
    </v-card>
  </v-hover>
    </b-col>
    <b-tooltip target="Nat" title="Aqui encpontraras todo lo referente a naturaleza"></b-tooltip>
  </b-row>
</b-container>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
  background-color: #1DB753
}
</style>
