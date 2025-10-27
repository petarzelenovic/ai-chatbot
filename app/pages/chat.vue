<template>
  <ChatWindow :chat="chat" :messages="messages" @send-message="sendMessage" />
</template>

<script setup lang="ts">
import ChatWindow from "~/components/ChatWindow.vue";

const { chat, sendMessage, messages } = useChat();

const appConfig = useAppConfig();
const title = computed(() =>
  chat.value?.title
    ? `${chat.value.title} - ${appConfig.title}`
    : appConfig.title
);

useHead({
  title,
});
</script>
