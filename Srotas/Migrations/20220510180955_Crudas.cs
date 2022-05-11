using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Srotas.Migrations
{
    public partial class Crudas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Nuolaida",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Procentai = table.Column<double>(type: "float", nullable: false),
                    Kodas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ArPanaudota = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nuolaida", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PavaruDeze",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Gamintojas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tipas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Kaina = table.Column<double>(type: "float", nullable: false),
                    Pavadinimas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Parduotas = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PavaruDeze", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Nuolaida");

            migrationBuilder.DropTable(
                name: "PavaruDeze");
        }
    }
}
