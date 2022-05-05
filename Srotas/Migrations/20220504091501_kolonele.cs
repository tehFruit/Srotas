using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Srotas.Migrations
{
    public partial class kolonele : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Koloneles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Gamintojas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Skersmuo = table.Column<int>(type: "int", nullable: false),
                    Kaina = table.Column<double>(type: "float", nullable: false),
                    Pavadinimas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Parduotas = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Koloneles", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Koloneles");
        }
    }
}
