<template>
  <ChatWindow
    :chat="chat"
    :messages="messages"
    :typing="typing"
    @send-message="handleSendMessage"
  />
</template>

<script setup lang="ts">
import ChatWindow from "~/components/ChatWindow.vue";

const { chat, sendMessage, messages } = useChat();
const typing = ref(false);

const handleSendMessage = async (message: string) => {
  typing.value = true;
  await sendMessage(message);
  typing.value = false;
};

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
