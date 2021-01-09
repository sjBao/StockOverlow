class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    enable_extension "pgcrypto" unless extension_enabled?("pgcrypto")

    create_table :users, id: :uuid, default: "gen_random_uuid()" do |t|
      t.string :first_name, :null => false
      t.string :last_name, :null => false
      t.string :email, :null => false
      t.string :password_digest, :null => false

      t.timestamps
    end
  end
end
