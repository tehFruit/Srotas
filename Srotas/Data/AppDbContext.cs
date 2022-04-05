﻿using Microsoft.EntityFrameworkCore;
using Srotas.Models;

namespace Srotas.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Ratai> Ratai { get; set; }
    }
}
