module.exports = class planService {
   constructor(knex) {
      this.knex = knex;
   }
   
   
   insertPlan( userId , name, days) {
      return this.knex('plan').insert([
         { userid: userId , name: name , days:days}
      ]).returning('id');
   }

   insertAttractioninplan(planId, Object) {
      return this.knex('attractioninplan').insert([
         { planid: planId, attractionid: Object.attractionid, day:Object.day , time:Object.time}
      ]);
   }

   readPlan(planId){
      return this.knex('plan').select('days').where('id', planId);
   }

   readAttractionplan (planId){
      return this.knex('attractioninplan').where('planid',planId);
   }

   deletePlanByID(ID) {
      return this.deleteAllAttractionInPlanByPlanID(ID).then(()=>{
         return this.knex('plan').where('id', ID).del();
      })
   }

   deleteAttractioninPlanByID(ID) {
      return this.knex('attractioninplan').where('id', ID).del();
   }

   deleteAllAttractionInPlanByPlanID(planId) {
      return this.knex('attractioninplan').where('planid',planId).del();
   }
   //below function not even test
}