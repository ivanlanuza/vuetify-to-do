<template>
    <div>
        <v-list-item
            @click="clickItem(task.id)"
            :class="{ 'grey lighten-3' : task.done }"
            class="white"
            :ripple="false"
        >
            <template v-slot:default>
                <v-list-item-action>
                    <v-checkbox
                    :input-value="task.done"
                    color="success"
                    ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title
                    :class="{ 'text-decoration-line-through text--disabled' : task.done }"
                    >{{task.title}}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action v-if="task.dueDate">
                    <v-list-item-action-text>
                        <v-icon small>mdi-calendar</v-icon>
                        {{task.dueDate | niceDate }}
                    </v-list-item-action-text>

                </v-list-item-action>

                <v-list-item-action v-if="!$store.state.sorting">
                    <task-menu :task="task"/>
                </v-list-item-action>

                <v-list-item-action v-if="$store.state.sorting">
                    <v-btn
                    color="primary"
                    icon
                    class="handle"
                    >
                    <v-icon>mdi-drag-horizontal-variant</v-icon>
                    </v-btn>
                </v-list-item-action>                
            </template>
        </v-list-item>  
        <v-divider></v-divider>
    </div>

</template>

<script>
import { format } from 'date-fns'
 
export default {
    methods: {
        clickItem(id) {
            this.$store.dispatch('clickItem', id);
        },
    }, 
    filters: {
        niceDate(value) {
            if(format(new Date(value), 'MMM-dd') == format(new Date(), 'MMM-dd'))
                {
                    return 'Due Today'
                }
            else{
                return format(new Date(value), 'MMM dd')
            }
        }
    },
    props: ['task'],
    components: {
        'task-menu': require('@/components/Todo/TaskListTaskMenu.vue').default,

    }
}
</script>

<style>
    .sortable-ghost {
        opacity: 0;
    }
    .sortable-drag {
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
    }
</style>