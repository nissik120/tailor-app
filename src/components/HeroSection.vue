<template>

<v-container>
    <v-row justify="center" align="center">
        <v-col class="text-center" cols="6">
            <h1>Fur Sie Gemacht, Von Der Mode Inspiriert</h1>
            <div class="d-flex flex-row justify-center">
                <v-btn 
                    link
                    to="/boutique"
                    class="pa-4 ma-2" 
                    size="large">
                    Zum Shop
                </v-btn>
                <v-btn 
                    link
                    to="/alterier"
                    class="pa-4 ma-2" size="large">
                    Alterier
                </v-btn>
            </div>
        </v-col>

        <v-col cols="cols 6">
            <v-img
              :src="`https://picsum.photos/id/36/200/300`"
              height="100%"
              cover
            ></v-img>
        </v-col>

    </v-row>

</v-container>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>