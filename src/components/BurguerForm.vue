<template>
    <div>
        <Message :msg="msg" v-show="msg" />

        <form id="burguer-form" @submit="createBurguer">
            <div class="input-container">
                <label for="name">Nome do cliente:</label>
                <input type="text" id="name" name="name" v-model="name" placeholder="Digite o seu nome:"/>
            </div>

            <div class="input-container">
                <label for="bread">Escolha o pão:</label>
                <select type="text" id="bread" name="bread" v-model="bread">
                    <option value="">Select your bread</option>
                    <option v-for="bread in breadsData" :key="bread.id" :value="bread.type">
                        {{ bread.type }}
                    </option>
                </select>
            </div>

            <div class="input-container">
                <label for="meat">Escolha a carne:</label>
                <select type="text" id="meat" name="meat" v-model="meat">
                    <option value="">Select your meat</option>
                    <option v-for="meat in meatsData" :key="meat.id" :value="meat.type">
                        {{ meat.type }}
                    </option>
                </select>
            </div>

            <div class="input-container">
                <label for="options">Select options</label>
                <div class="checkbox-container" v-for="option in optionsData" :key="option.id">
                    <input type="checkbox" name="options" v-model="options" :value="option.type">
                    <span>{{ option.type }}</span>
                </div>
            </div>

            <div class="input-container">
                <input type="submit" class="submit-btn" value="Create my Burguer">
            </div>
        </form>
    </div>
</template>

<script>
import Message from './Message.vue';

export default {
    name: 'BurguerForm',
    components: {
        Message
    },
    data() {
        return {
            breadsData: null,
            meatsData: null,
            optionsData: [],
            name: null,
            bread: null,
            meat: null,
            options: [],
            status: 'Solicitado',
            msg: null
        }
    },
    methods: {
        async getIngredients() {
            const req = await fetch('http://localhost:3000/ingredients');
            const data = await req.json();

            console.log(data);

            this.breadsData = data.breads;
            this.meatsData = data.meats;
            this.optionsData = data.options;
        },
        async createBurguer(e) {
            e.preventDefault();

            const req = await fetch('http://localhost:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name,
                    bread: this.bread,
                    meat: this.meat,
                    options: this.options,
                    status: this.status
                })
            });

            const data = await req.json();

            // Adicionar mensagem de sucesso
            this.msg = `Pedido Nº ${data.id} realizado com sucesso!`;

            // Limpar mensagem de sucesso
            setTimeout(() => {
                this.msg = null;
            }, 3000);

            // Limpar formulário
            this.name = null;
            this.bread = null;
            this.meat = null;
            this.options = [];
        }
    },
    mounted() {
        this.getIngredients();
    }
}
</script>