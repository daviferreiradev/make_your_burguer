<template>
    <Message :msg="msg" v-show="msg" />

    <table id="burguer-table">
        <thead>
            <tr >
                <th>#</th>
                <th>Nome</th>
                <th>Pão</th>
                <th>Carne</th>
                <th>Opcionais</th>
                <th>Status</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="order in orders" :key="order.id">
                <td>{{ order.id }}</td>
                <td>{{ order.name }}</td>
                <td>{{ order.bread }}</td>
                <td>{{ order.meat }}</td>
                <td>
                    <ul>
                        <li v-for="(option, index) in order.options" :key="index">
                            {{ option }}
                        </li>
                    </ul>
                </td>
                <td>
                    <select @change="updateOrder($event, order.id)">
                        <option value="">Selecione</option>
                        <option v-for="s in status" :key="s.id" :value="s.type" :selected="order.status == s.type">
                            {{ s.type }}
                        </option>
                    </select>
                </td>

                <td>
                    <button class="delete-btn" @click="deleteOrder(order.id)">Cancelar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Message from './Message.vue';

export default {
    name: "Dashboard",
    components: {
        Message
    },
    data() {
        return {
            orders: null,
            burguer_id: null,
            status: [],
            msg: null
        }
    },
    methods: {
        async getOrders() {
            const req = await fetch('http://localhost:3000/orders');
            const data = await req.json();

            this.orders = data;

            console.log(this.orders);

            this.getStatus();
        },
        async getStatus() {
            const req = await fetch('http://localhost:3000/status');
            const data = await req.json();

            this.status = data;
        },
        async deleteOrder(id) {
            const req = await fetch(`http://localhost:3000/orders/${id}`, {
                method: 'DELETE'
            });

            const data = await req.json();

            console.log(data);

            // Adicionar mensagem de sucesso
            this.msg = `Pedido Nº ${id} removido com sucesso!`;

            // Limpar mensagem de sucesso
            setTimeout(() => {
                this.msg = null;
            }, 3000);

            this.getOrders();
        },
        async updateOrder(event, id) {
            const req = await fetch(`http://localhost:3000/orders/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: event.target.value
                })
            });
     
        }
    },
    mounted() {
        this.getOrders();
    }
}
</script>