﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Srotas.Data;

#nullable disable

namespace Srotas.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Srotas.Models.Ratai", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Dydis")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gamintojas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Kaina")
                        .HasColumnType("float");

                    b.Property<bool>("Parduotas")
                        .HasColumnType("bit");

                    b.Property<string>("Pavadinimas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Plotis")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Ratai");
                });
#pragma warning restore 612, 618
        }
    }
}
