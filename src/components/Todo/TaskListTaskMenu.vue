<template>
    <div>
        <v-menu
            bottom
            left
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="primary"
                icon
                v-bind="attrs"
                v-on="on"
                >
                <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="handleClick(i)"
                >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>                
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <task-dialog-delete 
            v-if="dialogs.delete" 
            :task="task"
            @close="dialogs.delete=false"
        />
        <task-dialog-edit 
            v-if="dialogs.edit" 
            :task="task"
            @close="dialogs.edit=false"
        />       
        <task-dialog-due-date 
            v-if="dialogs.dueDate" 
            :task="task"
            @close="dialogs.dueDate=false"
        />         
    </div>
</template>

<script>
export default {
    data: () => ({
        dialogs: {
            delete: false,
            edit: false,
            dueDate: false
        },
        items: [
            { 
                title: 'Edit' , 
                icon: 'mdi-pencil',
                click() {
                    this.dialogs.edit = true;
                }
            },
            { 
                title: 'Due Date' , 
                icon: 'mdi-calendar',
                click() {
                    this.dialogs.dueDate = true
                }
            },
            { 
                title: 'Delete', 
                icon: 'mdi-delete',
                click() {
                    this.dialogs.delete = true;
                }
            },
            { 
                title: 'Sort', 
                icon: 'mdi-drag-horizontal-variant',
                click() {
                    if (!this.$store.state.searchEntry){ 
                        this.$store.commit('toggleSorting');
                    }
                    else {
                        this.$store.commit('showSnackbar', 'Please remove search filter before sorting.')
                    }
                }
            }            
        ],
    }),
    methods: {
        handleClick(index) {
            this.items[index].click.call(this);
        }
    },
    props: ['task'],
    components: {
        'task-dialog-delete': require('@/components/Shared/DialogDelete.vue').default,
        'task-dialog-edit': require('@/components/Shared/DialogEdit.vue').default,
        'task-dialog-due-date': require('@/components/Shared/DialogDueDate.vue').default,
}    
}
</script>

<style>

</style>