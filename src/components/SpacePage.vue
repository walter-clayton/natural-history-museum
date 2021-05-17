<template>
        <h1 class="space-page__title">
            Space
        </h1>
    <div class="d-flex justify-content-around">
        {{sortedItems}}
        <div class="grow-1 p-3" v-for="(item, index) in sorted" :key="index">
            <div>
                <i class="like-button overlay" @click="item.favourite = !item.favourite" :class="item.favourite? 'fas fa-star':'far fa-star'"></i>
                <img  class="x128" :src="item.image">
            </div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.date }}</p>
            <p>{{ item.description }}</p>
            <p>
                <a v-if="item.quiz? true:false" :href="item.quiz">Quiz</a>
            </p>
            <div @click="item.show = !item.show" class="news" v-if="item.news? true:false">
                <span>News <i :class="item.show? 'fas fa-chevron-down':'fas fa-chevron-right'"></i></span>
                <div v-if="item.show? true:false">
                    <p v-for="(news, index) in item.news" :key="index">
                        {{ news }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <h2 class="space-page__title">
        Partners
    </h2>
    <div class="p-3 grow-1" v-for="(item, index) in spacePartners" :key="index">
        <div>
            <i class="like-button overlay" @click="item.favourite = !item.favourite" :class="item.favourite? 'fas fa-star':'far fa-star'"></i>
            <img class="x128" :src="item.image">
        </div>
        <h3>{{ item.name }}</h3>
        <p>{{ item.date }}</p>
        <p>{{ item.info }}</p>
    </div>
</template>

<script>

export default {
    name: 'SpacePage',
    data() {
        return {
            sorted:[],
            spaceHighlights: [
                {
                    date: '2020-04-20 12:20:00',
                    description: 'Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.',
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1992&q=80',
                    name: 'Asteroids',
                },
                {
                    date: '2020-05-20 15:50:00',
                    description: 'A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.',
                    id: 9,
                    image: 'https://images.unsplash.com/photo-1501428125680-6dd943aa7d73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    name: 'Comets',
                },
                {
                    date: '2020-05-01 9:22:00',
                    description: 'The term planet is ancient, with ties to history, astrology, science, mythology, and religion.',
                    id: 7,
                    image: 'https://images.unsplash.com/photo-1506272517965-ec6133efee7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
                    name: 'Planets',
                    news: {
                        date: '2020-08-18 18:00:00',
                        title: 'Attend our talk about Jupiter with Dr. Hogarth',
                    },
                    quiz: 'https://planetquiz.space',
                },
                {
                    date: '2020-07-05 4:10:00',
                    description: 'A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.',
                    id: 12,
                    image: 'https://images.unsplash.com/photo-1532053413580-98b455b68458?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    name: 'Meteor showers',
                    news: {
                        title: 'The Lyrids will peak at on April 21-22 2021, at night',
                    },
                },
            ],
            spacePartners: {
                observatory: {
                    createdAt: '2020-06-01 11:45:00',
                    info: 'The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.',
                    image: 'https://images.unsplash.com/photo-1598674931646-412655aa28d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
                    name: 'Mauna Kea Observatories',
                },
            },
        };
    },
    computed: {
        sortedItems: function() {
            let newArray = this.spaceHighlights.map(v => ({...v, show: false, isFavourite: false}))
            this.sorted = newArray.slice().sort((a, b) => new Date(a.date) - new Date(b.date))
        }
    },
};
</script>

<style lang="scss" scoped>
.space-page {
    &__title {
        color: #2c3791;
        font-size: 3em;
        font-weight: 600;
    }
}
.p-3{
    padding: 3em;
}
.d-flex{
    display: flex;
}
.justify-content-around{
    justify-content: space-around;
}
.grow-1{
    flex-grow: 1;
}
.x128{
    width: 128px;
    height: 128px;
}
.card_news, i{
    font-size: 1em;
}
.like-button {
position: relative;
top: 25px;
left: 50px;
font-size: 2.5em;
color: red;
cursor: pointer;
}
.overlay {
 height: 100%;
 width: 100%;
}
@media (max-width: 800px) {
  .d-flex {
    flex-direction: column;
  }
}
</style>
