<template>
  <div
    class="
      flex flex-col
      p-4
      bg-white
      border-r border-solid border-brand-gray-1
      w-96
    "
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary"></action-button>
        </div>
      </div>
      <job-filters-side-bar-job-types></job-filters-side-bar-job-types>
      <job-filter-side-bar-organizations></job-filter-side-bar-organizations>
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import JobFilterSideBarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFilterSideBarOrganizations.vue";
import JobFiltersSideBarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSideBarJobTypes.vue";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    JobFilterSideBarOrganizations,
    JobFiltersSideBarJobTypes,
  },
};
</script>