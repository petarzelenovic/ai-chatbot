<template>
  <ChatWindow :chat="chat" :messages="messages" @send-message="sendMessage" />
</template>

<script setup lang="ts">
import ChatWindow from "~/components/ChatWindow.vue";

const { chat, sendMessage, messages } = useChat();

useHead({
  title: chat.value.title,
});
</script>
