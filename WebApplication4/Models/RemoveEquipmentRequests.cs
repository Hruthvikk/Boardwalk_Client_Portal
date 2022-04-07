﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class RemoveEquipmentRequests
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public int? EquipId { get; set; }
        public DateTime? RequestTime { get; set; }
    }
}
