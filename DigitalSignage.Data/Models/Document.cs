using System;
using System.Collections.Generic;
using System.Text;

namespace DocumentGenerator.Data.Models
{
    public class Document
    {
        public int Id { get; set; }
        public string  Detail { get; set; }
        public string Tag { get; set; }
        public int Order { get; set; }

    }
}
