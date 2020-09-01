using DigitalSignage.Application.Demo.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace DigitalSignage.Application.Demo
{
    [Route("api/[Controller]/{action}")]
    public class DigitalSignageDemo : ControllerBase
    {
        public DigitalSignageDemo()
        {

        }

        [HttpGet]
        public async Task<List<DemoDto>> Get ()
        { 
            var demoList = new List<DemoDto>();
            var demo1 = new DemoDto
            {
                WebUrl = "https://reports.itsutra.com/managerReport/seth?hide=true",
                ImageUrl = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
                Seconds = 20,
                Ordered = 1
            };
            demoList.Add(demo1);
            var demo2 = new DemoDto
            {
                WebUrl = "https://reports.itsutra.com/challengeRank?hide=true",
                ImageUrl = "https://wallpaperaccess.com/full/30100.jpg",
                Seconds = 20,
                Ordered = 2
            };
            demoList.Add(demo2);
            return demoList;
        }
    }
}
