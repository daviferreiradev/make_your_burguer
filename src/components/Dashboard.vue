<template>
    <Message :msg="msg" v-show="msg" />

    <table id="burger-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Pão</th>
                <th>Carne</th>
                <th>Opcionais</th>
                <th>Ações</th>
            </tr>
        </thead>

        <tbody>
            <tr class="burger-table-row" v-for="order in orders" :key="order.id">
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
            burger_id: null,
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

<style scoped>
#burger-table {
    width: 80%;
    height: 51vh;
    border-collapse: collapse;
    margin-top: 20px;
    color: #333;
    margin: 0 auto;
    border: 1px solid #ddd;
}

#burger-table th, #burger-table td {
    text-align: left;
    padding: 16px;
    border-bottom: 1px solid #ddd;
}

#burger-table th {
    background-color: #f2f2f2;
    color: black;
}

#burger-table tr:hover {
    background-color: #f5f5f5;
}

#burger-table .burger-table-row {
    transition: all 0.3s ease-in-out;
}

#burger-table select, #burger-table .delete-btn {
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    margin: 4px;
    cursor: pointer;
}

#burger-table select {
    border: 1px solid #ddd;
}

#burger-table .delete-btn {
    background-color: #ff4d4d;
    color: white;
    padding: 10px 12px;
}

#burger-table .delete-btn:hover {
    background-color: #ff6666;
}

ul {
    margin: 0;
    padding-left: 16px;
}
</style>
