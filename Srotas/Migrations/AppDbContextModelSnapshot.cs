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
                .HasAnnotation("ProductVersion", "6.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Srotas.Models.AutomobilioSkelbimas", b =>
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

                    b.Property<int>("KoloneliuSkersmuo")
                        .HasColumnType("int");

                    b.Property<string>("KuroTipas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Modelis")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PagaminimoMetai")
                        .HasColumnType("int");

                    b.Property<bool>("Parduotas")
                        .HasColumnType("bit");

                    b.Property<string>("PavaruDezesTipas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RatuDydis")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RatuPlotis")
                        .HasColumnType("int");

                    b.Property<int>("Rida")
                        .HasColumnType("int");

                    b.Property<string>("Spalva")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TuriDuris")
                        .HasColumnType("bit");

                    b.Property<bool>("TuriKapota")
                        .HasColumnType("bit");

                    b.Property<bool>("TuriKoloneles")
                        .HasColumnType("bit");

                    b.Property<bool>("TuriPavaruDeze")
                        .HasColumnType("bit");

                    b.Property<bool>("TuriRatus")
                        .HasColumnType("bit");

                    b.Property<bool>("TuriVarikli")
                        .HasColumnType("bit");

                    b.Property<double>("VariklioTuris")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("AutomobilioSkelbimas");
                });

            modelBuilder.Entity("Srotas.Models.Durys", b =>
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

                    b.Property<string>("Modelis")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PagaminimoMetai")
                        .HasColumnType("int");

                    b.Property<bool>("Parduotas")
                        .HasColumnType("bit");

                    b.Property<string>("Pavadinimas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Spalva")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Durys");
                });

            modelBuilder.Entity("Srotas.Models.Kapotas", b =>
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

                    b.Property<string>("Modelis")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PagaminimoMetai")
                        .HasColumnType("int");

                    b.Property<bool>("Parduotas")
                        .HasColumnType("bit");

                    b.Property<string>("Pavadinimas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Spalva")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Kapotas");
                });

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
