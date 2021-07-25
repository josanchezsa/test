<template lang="pug">
v-container(style="background-color: #27292d; max-width: none; height: 100%")
  v-snackbar(
    v-model="snackbar.show",
    :timeout="3000",
    :color="snackbar.color",
    top="",
    right=""
  )
    | {{ snackbar.text }}
    template(v-slot:action="{ attrs }")
      v-btn(
        color="snackbar.color",
        text="",
        v-bind="attrs",
        @click="snackbar.show = false"
      )
        | Close
  v-row.text-center
    v-col(cols="12")
      v-img.my-3(
        :src="require('../assets/icons/torre.png')",
        contain="",
        height="100"
      )
    v-col.mb-4(cols="12")
      h1.display-2.font-weight-bold.mb-3.text Welcome to torre Search App
    v-col.mb-5(cols="12", md="6")
      v-card.mx-auto(max-width="344")
        v-card-text
          div(style="color: #27292d") Search by username
          v-text-field(label="User name", v-model="usernameToSearch")
        v-card-actions(
          style="justify-content: flex-end; display: flex; align-items: end"
        )
          v-btn(
            @click="searchUsername(usernameToSearch)",
            style="color: #27292d; background-color: #cddc3a; border-color: #cddc3a"
          )
            | Search
    v-col.mb-5(cols="12", md="6")
      v-card.mx-auto(max-width="344")
        v-card-text
          div(style="color: #27292d") Search jobs
          v-row
            v-col(cols="12", md="4")
              v-text-field(label="Offset", v-model="jobOffset")
            v-col(cols="12", md="4")
              v-text-field(label="Size", v-model="jobSize")
            v-col(cols="12", md="4")
              v-text-field(label="Aggregate", v-model="jobAggregate")
        v-card-actions(
          style="justify-content: flex-end; display: flex; align-items: end"
        )
          v-btn(
            @click="searchJobs(jobOffset, jobSize, jobAggregate)",
            style="color: #27292d; background-color: #cddc3a; border-color: #cddc3a"
          )
            | Search
    v-col.mb-5(cols="12", md="6")
      v-card.mx-auto(max-width="344")
        v-card-text
          div(style="color: #27292d") Search by id
          v-text-field(label="Id", v-model="userIdToSearch")
        v-card-actions(
          style="justify-content: flex-end; display: flex; align-items: end"
        )
          v-btn(
            @click="searchById(userIdToSearch)",
            style="color: #27292d; background-color: #cddc3a; border-color: #cddc3a"
          )
            | Search
    v-col.mb-5(cols="12", md="6")
      v-card.mx-auto(max-width="344")
        v-card-text
          div(style="color: #27292d") Search people
          v-row
            v-col(cols="12", md="4")
              v-text-field(label="Offset", v-model="peopleOffset")
            v-col(cols="12", md="4")
              v-text-field(label="Size", v-model="peopleSize")
            v-col(cols="12", md="4")
              v-text-field(label="Aggregate", v-model="peopleAggregate")
        v-card-actions(
          style="justify-content: flex-end; display: flex; align-items: end"
        )
          v-btn(
            @click="searchPeople(peopleOffset, peopleSize, peopleAggregate)",
            style="color: #27292d; background-color: #cddc3a; border-color: #cddc3a"
          )
            | Search
    v-col(cols="12")
      v-data-table.elevation-1(
        :headers="headers",
        :items="rowDatarts",
        :loading="loading"
      )
</template>

<script>
var functions = require("../functions/functions");

export default {
  name: "ShowData",
  data: () => ({
    userIdToSearch: "",
    peopleOffset: "",
    peopleSize: "",
    peopleAggregate: "",
    jobOffset: "",
    jobSize: "",
    jobAggregate: "",
    snackbar: {
      show: false,
      text: "",
      color: ""
    },
    headerSelector: null,
    usernameToSearch: "",
    rowDatarts: [],
    loading: false,
    options: {},
    headers: [
      {
        text: "Name",
        value: "name"
      },
      { text: "Location", value: "location" },
      { text: "Professional headline", value: "professionalHeadline" },
      { text: "Interests", value: "interests" }
    ]
  }),
  methods: {
    searchUsername(username) {
      this.rowDatarts = [];
      this.headers = [
        {
          text: "Name",
          value: "name",
          sortable: false
        },
        { text: "Location", value: "location", sortable: false },
        {
          text: "Professional headline",
          value: "professionalHeadline",
          sortable: false
        },
        { text: "Interests", value: "interests", sortable: false }
      ];
      this.loading = true;
      functions
        .httpGetUsername(username)
        .then(response => {
          var interestsString = "";
          for (let i = 0; i < response.data.interests.length; i++) {
            if (i !== response.data.interests.length - 1) {
              interestsString += response.data.interests[i].name + ", ";
            } else {
              interestsString += response.data.interests[i].name;
            }
          }
          const tableData = {
            name: response.data.person.name,
            location: response.data.person.location.name,
            professionalHeadline: response.data.person.professionalHeadline,
            interests: interestsString
          };
          this.loading = false;
          this.rowDatarts = [tableData];
        })
        .catch(() => {
          this.loading = false;
          this.snackbar = {
            show: true,
            color: "red",
            text: "We can not find the user, try again please"
          };
        });
      this.usernameToSearch = "";
    },
    searchById(userIdToSearch) {
      this.rowDatarts = [];
      this.headers = [
        {
          text: "Organizations",
          value: "organizations",
          sortable: false
        },
        { text: "Languages", value: "languages", sortable: false },
        {
          text: "Deadline",
          value: "deadline",
          sortable: false
        },
        { text: "Compensation Range", value: "compensation", sortable: false }
      ];
      this.loading = true;
      functions
        .httpGetOpport(userIdToSearch)
        .then(response => {
          var organizationsStr = "";
          for (let i = 0; i < response.data.organizations.length; i++) {
            if (i !== response.data.organizations.length - 1) {
              organizationsStr += response.data.organizations[i].name + ", ";
            } else {
              organizationsStr += response.data.organizations[i].name;
            }
          }
          var languagesStr = "";
          for (let i = 0; i < response.data.languages.length; i++) {
            if (i !== response.data.languages.length - 1) {
              languagesStr += response.data.languages[i].language.name + ", ";
            } else {
              languagesStr += response.data.languages[i].language.name;
            }
          }
          const tableData = {
            organizations: organizationsStr,
            languages: languagesStr,
            deadline: response.data.deadline,
            compensation:
              response.data.compensation.currency +
              " " +
              response.data.compensation.minAmount +
              " - " +
              response.data.compensation.maxAmount
          };
          this.loading = false;
          this.rowDatarts = [tableData];
        })
        .catch(() => {
          this.loading = false;
          this.snackbar = {
            show: true,
            color: "red",
            text: "We can not find the opportunity, try again please"
          };
        });
      this.userIdToSearch = "";
    },
    searchJobs(offset, size, aggregate) {
      this.rowDatarts = [];
      this.headers = [
        {
          text: "Remote",
          sortable: false,
          value: "remote"
        },
        { text: "Deadline", value: "deadline", sortable: false },
        {
          text: "Compensation Range",
          value: "compensationRange",
          sortable: false
        },
        { text: "Skills", value: "skills", sortable: false }
      ];
      this.loading = true;
      functions
        .httpPostJobs(offset, size, aggregate)
        .then(response => {
          for (let i = 0; i < response.data.results.length; i++) {
            var skillsStr = "";
            for (let j = 0; j < response.data.results[i].skills.length; j++) {
              if (j !== response.data.results[i].skills.length - 1) {
                skillsStr += response.data.results[i].skills[j].name + ", ";
              } else {
                skillsStr += response.data.results[i].skills[j].name;
              }
            }
            var jobAvailable = {
              remote: response.data.results[i].remote,
              deadline: response.data.results[i].deadline,
              compensationRange:
                response.data.results[i].compensation.data.maxAmount +
                "-" +
                response.data.results[i].compensation.data.minAmount,
              skills: skillsStr
            };
            this.rowDatarts.push(jobAvailable);
            this.loading = false;
          }
        })
        .catch(() => {
          this.loading = false;
          this.snackbar = {
            show: true,
            color: "red",
            text: "We can not find jobs for these parameters, try again please"
          };
        });
      this.jobOffset = "";
      this.jobSize = "";
      this.jobAggregate = "";
    },
    searchPeople(peopleOffset, peopleSize, peopleAggregate) {
      this.rowDatarts = [];
      this.headers = [
        {
          text: "Name",
          value: "name"
        },
        { text: "Location", value: "location", sortable: false },
        {
          text: "Professional Headline",
          value: "professionalHeadline",
          sortable: false
        },
        { text: "Open To", value: "openTo", sortable: false }
      ];
      this.loading = true;
      functions
        .httpPostPeople(peopleOffset, peopleSize, peopleAggregate)
        .then(response => {
          for (let i = 0; i < response.data.results.length; i++) {
            var openToStr = "";
            for (let j = 0; j < response.data.results[i].openTo.length; j++) {
              if (j !== response.data.results[i].openTo.length - 1) {
                openToStr += response.data.results[i].openTo[j] + ", ";
              } else {
                openToStr += response.data.results[i].openTo[j];
              }
            }
            var peopleAvailable = {
              name: response.data.results[i].name,
              location: response.data.results[i].locationName,
              professionalHeadline:
                response.data.results[i].professionalHeadline,
              openTo: openToStr
            };
            this.rowDatarts.push(peopleAvailable);
            this.loading = false;
          }
        })
        .catch(() => {
          this.loading = false;
          this.snackbar = {
            show: true,
            color: "red",
            text:
              "We can not find people for these parameters, try again please"
          };
        });
      this.peopleOffset = "";
      this.peopleSize = "";
      this.peopleAggregate = "";
    }
  }
};
</script>
<style>
.text {
  color: #a9aaab;
}
</style>
