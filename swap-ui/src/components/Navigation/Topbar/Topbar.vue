<template>
  <div>
    <!-- Desktop version -->
    <div v-if="!isMobile" class="top-bar top-bar--desktop">
      <div class="top-bar__logo" @click="navigateToPath('/', tabs.HOME)">
        <img src="@/assets/swap-logo-brand.png" alt="Swap" />
      </div>
      <div class="top-bar__center-col">
        <!-- <BaseButton
          class="top-bar__menu-item"
          :text="'Post a task'"
          @click="navigateToPath('/post', tabs.NEW_JOB)"
        /> -->
        <span
          class="top-bar__menu-item"
          @click="navigateToPath('/jobs', tabs.JOBS)"
        >
          Browse tasks
        </span>
      </div>
      <div class="top-bar__right-col" v-if="authenticated">
        <BaseIcon
          :fill="true"
          :icon="navigationIcons.notificationIcon"
          :width="30"
          :height="25"
          :viewBox="'0 0 35 15'"
        />
        <span class="top-bar__notification">9</span>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div
              v-bind="attrs"
              v-on="on"
              class="top-bar__profile-menu-activator"
            >
              <BaseIcon
                class="top-bar__account-icon"
                :fill="true"
                :icon="navigationIcons.accountIcon"
                :width="25"
                :height="22"
                :viewBox="'0 0 20 20'"
              />
            </div>
          </template>

          <v-list>
            <v-list-item @click="navigateToPath('/profile', tabs.PROFILE)">
              <v-list-item-title>
                My profile
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="onSignOut">
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="top-bar__right-col" v-else>
        <span
          class="top-bar__menu-item"
          @click="navigateToPath('/signup', tabs.SIGN_UP)"
        >
          Sign up
        </span>
        <span
          class="top-bar__menu-item"
          @click="navigateToPath('/signin', tabs.SIGN_IN)"
        >
          Log in
        </span>
        <!-- <BaseButton
          :text="'Become a Swapper'"
          :secondary="true"
        /> -->
      </div>
    </div>
    <!-- Mobile version -->
    <div
      v-if="isMobile"
      :class="{
        'top-bar': true,
        'top-bar--mobile': isMobile,
        authenticated: authenticated,
      }"
    >
      <div class="top-bar__logo">
        <img
          src="@/assets/swap-logo-brand.png"
          alt="Swap"
          width="40"
          height="40"
          @click="navigateToPath('/', tabs.HOME)"
        />
      </div>
      <div class="top-bar__right-col" v-if="authenticated">
        <BaseIcon
          :fill="true"
          :icon="navigationIcons.notificationIcon"
          :width="30"
          :height="25"
          :viewBox="'0 0 35 15'"
        />
        <span class="top-bar__notification">9</span>
        <BaseIcon
          class="top-bar__account-icon"
          :fill="true"
          :icon="navigationIcons.messagesIcon"
          :width="30"
          :height="25"
          :viewBox="'0 0 35 15'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from "vue-router";
  import { useRoute } from "vue-router";
  import { ref } from "vue";
  // import { Tabs } from "@/utils/consts";
  // import { EventBus } from "@/utils/eventBus";
  // import { navigationIcons } from "@/assets/icons/icons";
  // import BaseIcon from "../../Base/BaseIcon.vue";
  // import BaseButton from "@/components/Base/BaseButton.vue";
  import ResponsiveMixin from "@/mixins/responsiveMixin";
  import { navigationIcons } from "@/assets/icons/icons";
  import { Tabs } from "@/utils/consts";

  const { isMobile } = ResponsiveMixin();
  const router = useRouter();
  const route = useRoute();
  const tabs = Tabs;
  const authenticated = ref(false);

  const navigateToPath = (path: string, tab: number) => {
    if (route.path !== path) {
      router.push(path);
      setCurrentTab(tab);
    }
  };
  const setCurrentTab = (tab: number) => {
    console.log(tab);
  };
  const onSignOut = () => {
    console.log("Sign out");
  };
</script>

<style lang="scss">
/* Common styles for both versions */
.top-bar {
  height: 80px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

.top-bar__logo img {
  width: auto;
  height: 50px;
  margin-left: 15px;
  margin-top: 15px;
  cursor: pointer;
}

.top-bar__center-col {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
}

.top-bar__center-col .top-bar__menu-item {
  margin-right: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.top-bar__right-col {
  margin-right: 20px;
  display: flex;
  align-items: center;
}

.top-bar__right-col .top-bar__menu-item {
  margin-right: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.top-bar__notification {
  position: absolute;
  width: 15px;
  height: 15px;
  right: 45px;
  top: 24px;
  background-color: #ff6760;
  font-size: 9px;
  border: solid 1px #ff6760;
  border-radius: 25px;
  color: white;
  font-weight: 600;
}

/* MOBILE */

.top-bar--mobile {
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  .top-bar__logo img {
    right: 10px;
  }
}

.top-bar--mobile.authenticated {
  .top-bar__logo img {
    margin-left: 15px;
  }

  .top-bar__right-col {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .top-bar__notification {
    right: 41px !important;
  }
}
</style>
