using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Srotas.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pardavejas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Reitingas = table.Column<double>(type: "float", nullable: false),
                    Slapyvardis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Saptazodis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    elPastas = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pardavejas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pirkejas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Balansas = table.Column<double>(type: "float", nullable: false),
                    Slapyvardis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Saptazodis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    elPastas = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pirkejas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Nuolaida",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Procentai = table.Column<double>(type: "float", nullable: false),
                    Kodas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ArPanaudota = table.Column<bool>(type: "bit", nullable: false),
                    PardavejasId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nuolaida", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Nuolaida_Pardavejas_PardavejasId",
                        column: x => x.PardavejasId,
                        principalTable: "Pardavejas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Uzsakymas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Kodas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    pristatymoData = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Suma = table.Column<double>(type: "float", nullable: false),
                    Ivertinimas = table.Column<int>(type: "int", nullable: false),
                    PirkejasId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Uzsakymas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Uzsakymas_Pirkejas_PirkejasId",
                        column: x => x.PirkejasId,
                        principalTable: "Pirkejas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AutomobilioSkelbimas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Gamintojas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Modelis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rida = table.Column<int>(type: "int", nullable: false),
                    PagaminimoMetai = table.Column<int>(type: "int", nullable: false),
                    PavaruDezesTipas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    KuroTipas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Spalva = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Kaina = table.Column<double>(type: "float", nullable: false),
                    TuriRatus = table.Column<bool>(type: "bit", nullable: false),
                    RatuDydis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RatuPlotis = table.Column<int>(type: "int", nullable: false),
                    TuriVarikli = table.Column<bool>(type: "bit", nullable: false),
                    VariklioTuris = table.Column<double>(type: "float", nullable: false),
                    TuriPavaruDeze = table.Column<bool>(type: "bit", nullable: false),
                    TuriKoloneles = table.Column<bool>(type: "bit", nullable: false),
                    KoloneliuSkersmuo = table.Column<int>(type: "int", nullable: false),
                    TuriKapota = table.Column<bool>(type: "bit", nullable: false),
                    TuriDuris = table.Column<bool>(type: "bit", nullable: false),
                    Parduotas = table.Column<bool>(type: "bit", nullable: false),
                    UzsakymasId = table.Column<int>(type: "int", nullable: true),
                    PardavejasId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AutomobilioSkelbimas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AutomobilioSkelbimas_Pardavejas_PardavejasId",
                        column: x => x.PardavejasId,
                        principalTable: "Pardavejas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AutomobilioSkelbimas_Uzsakymas_UzsakymasId",
                        column: x => x.UzsakymasId,
                        principalTable: "Uzsakymas",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Durys",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Gamintojas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Modelis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PagaminimoMetai = table.Column<int>(type: "int", nullable: false),
                    Spalva = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UzsakymasId = table.Column<int>(type: "int", nullable: true),
                    PardavejasId = table.Column<int>(type: "int", nullable: false),
                    Kaina = table.Column<double>(type: "float", nullable: false),
                    Pavadinimas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Parduotas = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Durys", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Durys_Pardavejas_PardavejasId",
                        column: x => x.PardavejasId,
                        principalTable: "Pardavejas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Durys_Uzsakymas_UzsakymasId",
                        column: x => x.UzsakymasId,
                        principalTable: "Uzsakymas",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Kapotas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Gamintojas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Modelis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PagaminimoMetai = table.Column<int>(type: "int", nullable: false),
                    Spalva = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UzsakymasId = table.Column<int>(type: "int", nullable: true),
                    PardavejasId = table.Column<int>(type: "int", nullable: false),
                    Kaina = table.Column<double>(type: "float", nullable: false),
                    Pavadinimas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Parduotas = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kapotas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Kapotas_Pardavejas_PardavejasId",
                        column: x => x.PardavejasId,
                        principalTable: "Pardavejas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Kapotas_Uzsakymas_UzsakymasId",
                        column: x => x.UzsakymasId,
                        principalTable: "Uzsakymas",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Koloneles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Gamintojas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Skersmuo = table.Column<int>(type: "int", nullable: false),
                    UzsakymasId = table.Column<int>(type: "int", nullable: true),
                    PardavejasId = table.Column<int>(type: "int", nullable: false),
                    Kaina = table.Column<double>(type: "float", nullable: false),
                    Pavadinimas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Parduotas = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Koloneles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Koloneles_Pardavejas_PardavejasId",
                        column: x => x.PardavejasId,
                        principalTable: "Pardavejas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Koloneles_Uzsakymas_UzsakymasId",
                        column: x => x.UzsakymasId,
                        principalTable: "Uzsakymas",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PavaruDeze",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Gamintojas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tipas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UzsakymasId = table.Column<int>(type: "int", nullable: true),
                    PardavejasId = table.Column<int>(type: "int", nullable: false),
                    Kaina = table.Column<double>(type: "float", nullable: false),
                    Pavadinimas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Parduotas = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PavaruDeze", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PavaruDeze_Pardavejas_PardavejasId",
                        column: x => x.PardavejasId,
                        principalTable: "Pardavejas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PavaruDeze_Uzsakymas_UzsakymasId",
                        column: x => x.UzsakymasId,
                        principalTable: "Uzsakymas",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Ratai",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Dydis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Plotis = table.Column<int>(type: "int", nullable: false),
                    Gamintojas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UzsakymasId = table.Column<int>(type: "int", nullable: true),
                    PardavejasId = table.Column<int>(type: "int", nullable: false),
                    Kaina = table.Column<double>(type: "float", nullable: false),
                    Pavadinimas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Parduotas = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ratai", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Ratai_Pardavejas_PardavejasId",
                        column: x => x.PardavejasId,
                        principalTable: "Pardavejas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Ratai_Uzsakymas_UzsakymasId",
                        column: x => x.UzsakymasId,
                        principalTable: "Uzsakymas",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Variklis",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Gamintojas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Turis = table.Column<double>(type: "float", nullable: false),
                    KuroTipas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UzsakymasId = table.Column<int>(type: "int", nullable: true),
                    PardavejasId = table.Column<int>(type: "int", nullable: false),
                    Kaina = table.Column<double>(type: "float", nullable: false),
                    Pavadinimas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Parduotas = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Variklis", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Variklis_Pardavejas_PardavejasId",
                        column: x => x.PardavejasId,
                        principalTable: "Pardavejas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Variklis_Uzsakymas_UzsakymasId",
                        column: x => x.UzsakymasId,
                        principalTable: "Uzsakymas",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AutomobilioSkelbimas_PardavejasId",
                table: "AutomobilioSkelbimas",
                column: "PardavejasId");

            migrationBuilder.CreateIndex(
                name: "IX_AutomobilioSkelbimas_UzsakymasId",
                table: "AutomobilioSkelbimas",
                column: "UzsakymasId");

            migrationBuilder.CreateIndex(
                name: "IX_Durys_PardavejasId",
                table: "Durys",
                column: "PardavejasId");

            migrationBuilder.CreateIndex(
                name: "IX_Durys_UzsakymasId",
                table: "Durys",
                column: "UzsakymasId");

            migrationBuilder.CreateIndex(
                name: "IX_Kapotas_PardavejasId",
                table: "Kapotas",
                column: "PardavejasId");

            migrationBuilder.CreateIndex(
                name: "IX_Kapotas_UzsakymasId",
                table: "Kapotas",
                column: "UzsakymasId");

            migrationBuilder.CreateIndex(
                name: "IX_Koloneles_PardavejasId",
                table: "Koloneles",
                column: "PardavejasId");

            migrationBuilder.CreateIndex(
                name: "IX_Koloneles_UzsakymasId",
                table: "Koloneles",
                column: "UzsakymasId");

            migrationBuilder.CreateIndex(
                name: "IX_Nuolaida_PardavejasId",
                table: "Nuolaida",
                column: "PardavejasId");

            migrationBuilder.CreateIndex(
                name: "IX_PavaruDeze_PardavejasId",
                table: "PavaruDeze",
                column: "PardavejasId");

            migrationBuilder.CreateIndex(
                name: "IX_PavaruDeze_UzsakymasId",
                table: "PavaruDeze",
                column: "UzsakymasId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratai_PardavejasId",
                table: "Ratai",
                column: "PardavejasId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratai_UzsakymasId",
                table: "Ratai",
                column: "UzsakymasId");

            migrationBuilder.CreateIndex(
                name: "IX_Uzsakymas_PirkejasId",
                table: "Uzsakymas",
                column: "PirkejasId");

            migrationBuilder.CreateIndex(
                name: "IX_Variklis_PardavejasId",
                table: "Variklis",
                column: "PardavejasId");

            migrationBuilder.CreateIndex(
                name: "IX_Variklis_UzsakymasId",
                table: "Variklis",
                column: "UzsakymasId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AutomobilioSkelbimas");

            migrationBuilder.DropTable(
                name: "Durys");

            migrationBuilder.DropTable(
                name: "Kapotas");

            migrationBuilder.DropTable(
                name: "Koloneles");

            migrationBuilder.DropTable(
                name: "Nuolaida");

            migrationBuilder.DropTable(
                name: "PavaruDeze");

            migrationBuilder.DropTable(
                name: "Ratai");

            migrationBuilder.DropTable(
                name: "Variklis");

            migrationBuilder.DropTable(
                name: "Pardavejas");

            migrationBuilder.DropTable(
                name: "Uzsakymas");

            migrationBuilder.DropTable(
                name: "Pirkejas");
        }
    }
}
