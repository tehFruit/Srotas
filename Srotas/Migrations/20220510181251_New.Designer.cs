﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Srotas.Data;

#nullable disable

namespace Srotas.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20220510181251_New")]
    partial class New
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Srotas.Models.Koloneles", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

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

                    b.Property<int>("Skersmuo")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Koloneles");
                });

            modelBuilder.Entity("Srotas.Models.Nuolaida", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<bool>("ArPanaudota")
                        .HasColumnType("bit");

                    b.Property<string>("Kodas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Procentai")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("Nuolaida");
                });

            modelBuilder.Entity("Srotas.Models.PavaruDeze", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

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

                    b.Property<string>("Tipas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("PavaruDeze");
                });

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

            modelBuilder.Entity("Srotas.Models.Variklis", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Gamintojas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Kaina")
                        .HasColumnType("float");

                    b.Property<string>("KuroTipas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Parduotas")
                        .HasColumnType("bit");

                    b.Property<string>("Pavadinimas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Turis")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("Variklis");
                });
#pragma warning restore 612, 618
        }
    }
}
