﻿using BarsTest.Models;
using Dapper;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace BarsTest.Repository
{
    public class PersonRepository
    {
        public NpgsqlConnection con;
        //To Handle connection related activities      
        private void connection()
        {
            con = new NpgsqlConnection("Server = localhost; Database = test; User Id = postgres; Password = Leila1995; Port = 5432; ");
        }

       
        //To Add Person details      
        public void AddPerson(Person objPer)
        {  
            try
            {
                string sql = $"insert into public.citizensregister(firstname, lastname, middlename, autogenerated, snils, snilsdate, birthday, passportnum1, passportnum2, passportissueplace, passportissuedate, registraddress, livingaddress, education, maritalstatus, socialstat, job, pensiontype, invalidgroup) " +
                  $"values ('{objPer.firstName}','{objPer.lastName}','{objPer.middleName}'," +
                  $"{objPer.autoGenerated}," +
                  $"'{objPer.Snils}'," +
                  $"'{objPer.SnilsDate}'," +
                  $"'{objPer.birthday}'," +
                  $"'{objPer.passportNum1}','{objPer.passportNum2}','{objPer.passportIssuePlace}'," +
                  $"'{objPer.passportIssueDate}'," +
                  $"'{objPer.registrAddress}','{objPer.livingAddress}','{objPer.education}'," +
                  $"'{objPer.maritalstatus}'," +
                  $"'{objPer.SocialStat}','{objPer.Job}','{objPer.PensionType}'," +
                  $"{objPer.InvalidGroup});";
                sql = sql.Replace(",);", ",null);").Replace(",,",",null,").Replace("''", "null").Replace("0:00:00","");
                connection();
                con.Open();
                con.Execute(sql);
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



        //To view person details with generic list       
        public List<Person> GetAllPersons(Person person = null)
        {
            try
            {
                string sql = "";
                    sql = $"SELECT * " +
                    $"FROM public.citizensregister " +
                    $"where 1=1 " +
                     (person.firstName != null ? $"firstname = '{person.firstName}' and " : $"") +
                    (person.lastName != null ? $"lastname = '{person.lastName}' and " : $"") +
                    (person.middleName != null ? $"middlename = '{person.middleName}' and " : $"") +
                    (person.id != 0 ? $"id = '{person.id}' and " : $"") +
                    (person.Snils != null ? $"snils = '{person.Snils}' and " : $"") +
                    (person.birthday != null ? $"birthday = '{person.birthday}' and " : $"") +
                    (person.passportNum1 != null ? $"passportnum1 = '{person.passportNum1}' and " : $"") +
                    (person.passportNum2 != null ? $"passportnum2 = '{person.passportNum2}' and " : $"") +
                    (person.passportIssuePlace != null ? $"passportissueplace = '{person.passportIssuePlace}' and " : $"") +
                    (person.passportIssueDate != null ? $"passportissuedate = '{person.passportIssueDate}' and " : $"") +
                    (person.registrAddress != null ? $"registraddress = '{person.registrAddress}' and " : $"") +
                    (person.livingAddress != null ? $"livingaddress = '{person.livingAddress}' and " : $"") +
                    $";";
                    sql = sql.Replace("and ;", ";").Replace("=''", "=null").Replace("=,", "=null,").Replace("0:00:00", "");
                connection();
                con.Open();
                
                IList<Person> EmpList = SqlMapper.Query<Person>(
                    con, sql).ToList();

                 
                con.Close();
                return EmpList.ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        //To Update Persons details      
        public void UpdatePerson(Person objUpdate)
        {
            try
            {
                string sql = $"UPDATE public.citizensregister " +
                    $"SET firstname ='{objUpdate.firstName}', lastname ='{objUpdate.lastName}', middlename ='{objUpdate.middleName}', autogenerated ='{objUpdate.autoGenerated}', snils ='{objUpdate.Snils}', snilsdate ='{objUpdate.SnilsDate}', birthday ='{objUpdate.birthday}', passportnum1 ='{objUpdate.passportNum1}', passportnum2 ='{objUpdate.passportNum2}', " +
                    $"passportissueplace ='{objUpdate.passportIssuePlace}', passportissuedate ='{objUpdate.passportIssueDate}', registraddress ='{objUpdate.registrAddress}', livingaddress ='{objUpdate.livingAddress}', education ='{objUpdate.education}', maritalstatus ='{objUpdate.maritalstatus}', socialstat ='{objUpdate.SocialStat}', job ='{objUpdate.Job}', pensiontype ='{objUpdate.PensionType}', invalidgroup ='{objUpdate.InvalidGroup}'" +
                    $"   WHERE id = {objUpdate.id};";
                sql = sql.Replace("''", "null");
                connection();
                con.Open();
                con.Execute(sql);
                con.Close();
            }
            catch (Exception)
            {

                throw;
            }

        }
        //To delete person details      
        public bool DeletePerson(int Id)
        {
            try
            {
                string sql = $"DELETE FROM public.citizensregister" +
                    $" WHERE id = {Id}; ";
                DynamicParameters param = new DynamicParameters();
                param.Add("@EmpId", Id);
                connection();
                con.Open();
                con.Execute(sql);
                con.Close();
                return true;
            }
            catch (Exception ex)
            {      
                throw ex;
            }
        }
    }
}